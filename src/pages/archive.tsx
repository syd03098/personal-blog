import React from 'react';
import { GetStaticPropsResult } from 'next';
import { getAllPublishedPosts } from '@lib/notionhq';
import { Post } from '@lib/types';
import { NextSeo } from 'next-seo';
import PostRow from '@components/PostRow';
import PageLayout from '@components/layout/PageLayout';
import Typography from '@components/Typography';

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{ posts: Post[] }>
> => {
  const posts = await getAllPublishedPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const Archive = ({ posts }: { posts: Post[] }): JSX.Element => {
  return (
    <>
      {/* todo: 포스트가 길어지면 검색창 추가 */}
      <NextSeo
        title="Archive | Yongho kim"
        canonical="https://yongho-kim.com/archive"
        openGraph={{
          title: 'Archive | Yongho kim',
        }}
      />
      <PageLayout
        title={<Typography>Archive</Typography>}
        body={
          <>
            {posts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </>
        }
      />
    </>
  );
};

export default Archive;
