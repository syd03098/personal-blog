import PageLayout from '@components/layout/PageLayout';
import PostRow from '@components/PostRow';
import { css } from '@emotion/react';
import { getPublishedPosts } from '@lib/notion/official';
import { PostSummary } from '@lib/types';
import { GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

interface PageProps {
  posts: PostSummary[];
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const posts = await getPublishedPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

function Home({ posts }: PageProps): JSX.Element {
  return (
    <>
      <NextSeo
        title="Home | Yongho kim"
        openGraph={{
          title: 'Home | Yongho kim',
        }}
      />
      <PageLayout
        title="Posts"
        body={
          <>
            {posts.map((post) => (
              <PostRow
                key={post.id}
                css={css`
                  margin-bottom: 64px;
                `}
                postSummary={post}
              />
            ))}
          </>
        }
      />
    </>
  );
}

export default Home;
