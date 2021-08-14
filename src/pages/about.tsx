import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticPropsResult } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import { notion } from '@lib/notion';
import { PostContentsView } from '@components/PostContentsView';

interface Props {
  recordMap: ExtendedRecordMap;
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const recordMap = await notion.getPage(process.env.NOTION_ABOUT_PAGE_ID);
  return {
    props: {
      recordMap,
    },
  };
};

const About = ({ recordMap }: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title="About | Yongho kim"
        canonical="https://yongho-kim.com/about"
        openGraph={{
          title: 'About | Yongho kim',
        }}
      />
      <PostContentsView recordMap={recordMap} />
    </>
  );
};

export default About;
