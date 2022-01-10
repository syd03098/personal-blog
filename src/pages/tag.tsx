import PageLayout from '@components/layout/PageLayout';
import NextLink from '@components/NextLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getAllPostsWithTag } from '@lib/notion/official';
import { Tag } from '@lib/types';
import SiteConfig from '@src/siteConfig';
import { GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

interface PageProps {
  tags: Tag[];
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const counts = await getAllPostsWithTag();

  return {
    props: {
      tags: counts,
    },
    revalidate: 10,
  };
}

function Tags({ tags }: PageProps): JSX.Element {
  return (
    <>
      <NextSeo
        title="Tag | Yongho kim"
        canonical={`${SiteConfig.url}/tag`}
        openGraph={{
          title: 'Tag | Yongho kim',
        }}
      />
      <PageLayout
        title="Tags"
        body={
          <FlexWrap>
            {tags.map((tag) => (
              <NextLink css={tagLinkCss} href={`/tag/${tag.label}`}>
                {tag.label} <span>{tag.count}</span>
              </NextLink>
            ))}
          </FlexWrap>
        }
      />
    </>
  );
}

const FlexWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px 16px;
  margin: 0;
  padding: 0;
`;

const tagLinkCss = css`
  color: var(--palette-link);
  font-weight: 500;

  span {
    color: var(--text-plain);
    font-weight: normal;
  }
`;

export default Tags;
