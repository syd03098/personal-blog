import PageLayout from '@components/layout/PageLayout';
import PostRow from '@components/PostRow';
import { css } from '@emotion/react';
import { getCategories, getPublishedPosts } from '@lib/notion/official';
import { PostSummary } from '@lib/types';
import SiteConfig from '@src/siteConfig';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

interface PageProps {
  query: string;
  filteredPosts: PostSummary[];
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map((category) => ({
      params: {
        id: category,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<PageProps>> {
  const query = params?.id as string;
  const filteredPosts = await getPublishedPosts({
    property: 'tags',
    multi_select: {
      contains: query,
    },
  });

  if (filteredPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      query,
      filteredPosts,
    },
    revalidate: 10,
  };
}

function TagName({ query, filteredPosts }: PageProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={`Tag: ${query} | Yongho Kim`}
        description={`Posts with ${query} category`}
        canonical={`${SiteConfig.url}/tag/${query}`}
        openGraph={{
          title: `Tag: ${query} | Yongho Kim`,
          description: `Posts with ${query} category`,
        }}
      />
      <PageLayout
        title={`Tag: ${query}`}
        body={
          <>
            {filteredPosts.map((postSummary) => (
              <PostRow
                key={postSummary.id}
                css={css`
                  margin-bottom: 36px;
                `}
                postSummary={postSummary}
              />
            ))}
          </>
        }
      />
    </>
  );
}

export default TagName;
