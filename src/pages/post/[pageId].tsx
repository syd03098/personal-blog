import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { getPostDetail, notion } from '@lib/notion';
import { getAllPublishedPosts } from '@lib/notionhq';
import { NextSeo } from 'next-seo';
import { ExtendedRecordMap } from 'notion-types';
import { Post } from '@lib/types';
import { PostContentsView } from '@components/PostContentsView';
import PostSummary from '@components/PostContentsView/PostSummary';

interface Props {
  recordMap: ExtendedRecordMap;
  pageDetail: Post;
  pageId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPublishedPosts();
  return {
    paths: posts.map(({ id }) => ({
      params: {
        pageId: id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const pageId = params.pageId as string;
  try {
    const recordMap = await notion.getPage(pageId);
    const pageDetail = await getPostDetail(pageId, recordMap);

    return {
      props: {
        recordMap,
        pageId,
        pageDetail,
      },
      revalidate: 10,
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export const Article = ({
  recordMap,
  pageId,
  pageDetail,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${pageDetail.title} | Yongho kim`}
        description={pageDetail.summary}
        canonical={`https://yongho-kim.com/post/${pageId}`}
        openGraph={{
          title: `${pageDetail.title} | Yongho kim`,
          description: `${pageDetail.summary}`,
          type: 'article',
        }}
      />
      <PostSummary post={pageDetail} />
      <PostContentsView recordMap={recordMap} />
    </>
  );
};

export default Article;
