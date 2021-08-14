import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { getAllPublishedPosts, getAllTagName } from '@lib/notionhq';
import { Post } from '@lib/types';
import { NextSeo } from 'next-seo';
import PostRow from '@components/PostRow';
import PageLayout from '@components/layout/PageLayout';
import Typography from '@components/Typography';

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTagName();
  return {
    paths: tags.map((tag) => ({
      params: {
        tagName: tag,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<{ filteredPosts: Post[]; tagName: string }>
> => {
  const tagName = params.tagName as string;
  const filteredPosts = await getAllPublishedPosts({
    option: {
      property: 'tags',
      multi_select: {
        contains: tagName,
      },
    },
  });

  if (filteredPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      filteredPosts,
      tagName,
    },
    revalidate: 10,
  };
};

export const TagName = ({
  filteredPosts,
  tagName,
}: {
  filteredPosts: Post[];
  tagName: string;
}): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Tag: ${tagName} | Yongho Kim`}
        description={`Posts with ${tagName} category`}
        canonical={`https://yongho-kim.com/tag/${tagName}`}
        openGraph={{
          title: `Tag: ${tagName} | Yongho Kim`,
          description: `Posts with ${tagName} category`,
        }}
      />
      <PageLayout
        title={<Typography>{`Tag: ${tagName}`}</Typography>}
        body={
          <>
            {filteredPosts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </>
        }
      />
    </>
  );
};

export default TagName;
