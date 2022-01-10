import PostRenderer from '@components/post';
import Summary from '@components/post/summary';
import { css } from '@emotion/react';
import { getPostSummary, getPublishedPosts } from '@lib/notion/official';
import { notion } from '@lib/notion/thirdParty';
import { Post } from '@lib/types';
import SiteConfig from '@src/siteConfig';
import { GetStaticPropsContext } from 'next';
import { NextSeo } from 'next-seo';
import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

interface ArticleProps {
  // id: string;
  postSummary: Post;
  recordMap: ExtendedRecordMap;
}

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return {
    paths: posts.map(({ id }) => ({
      params: {
        id,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postId = params?.id as string;
  try {
    const [recordMap, postSummary] = await Promise.all([
      notion.getPage(postId),
      getPostSummary(postId),
    ]);

    return {
      props: {
        id: postId,
        postSummary,
        recordMap,
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
}

function Article({ postSummary, recordMap }: ArticleProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={`${postSummary.title} | Yongho kim`}
        description={postSummary.summary}
        canonical={`${SiteConfig.url}/post/${postSummary.id}`}
        openGraph={{
          title: `${postSummary.title} | Yongho kim`,
          description: `${postSummary.summary}`,
          type: 'article',
        }}
      />
      <Summary css={summaryCss} summary={postSummary} />
      <PostRenderer recordMap={recordMap} />
    </>
  );
}

const summaryCss = css`
  margin-bottom: 48px;
`;

export default Article;
