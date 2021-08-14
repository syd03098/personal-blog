import React from 'react';
import { GetStaticPropsResult } from 'next';
import { getAllPublishedPosts } from '@lib/notionhq';
import PostRow from '@components/PostRow';
import { Post } from '@lib/types';
import { NextSeo } from 'next-seo';
import PageLayout from '@components/layout/PageLayout';
import Typography from '@components/Typography';

interface Props {
  posts: Post[];
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const posts = await getAllPublishedPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const Home = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Home | Yongho kim"
        openGraph={{
          title: 'Home | Yongho kim',
        }}
      />
      <PageLayout
        title={<Typography type="small">Recently Posted</Typography>}
        body={
          <>
            {posts.slice(0, 5).map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </>
        }
      />
    </>
  );
};

export default Home;
