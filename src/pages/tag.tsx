import React from 'react';
import { getCountOfPostsFromTags } from '@lib/notionhq';
import { GetStaticPropsResult } from 'next';
import NextLink from '@components/NextLink';
import { NextSeo } from 'next-seo';
import styled from '@theme/styled';
import { PostTags } from '@lib/types';
import PageLayout from '@components/layout/PageLayout';
import Typography from '@components/Typography';

interface Props {
  counts: PostTags[];
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const counts = await getCountOfPostsFromTags();
  return {
    props: {
      counts,
    },
    revalidate: 10,
  };
};

const Tags = ({ counts }: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Tags | Yongho kim"
        canonical="https://yongho-kim.com/tag"
        openGraph={{
          title: 'Tags | Yongho kim',
        }}
      />
      <PageLayout
        title={<Typography>Tags</Typography>}
        body={
          <StyledTagsList>
            {counts.map(({ count, tagName }) => (
              <li key={tagName}>
                <StyledTag href={`/tag/${tagName}`}>
                  {tagName} <span>({count})</span>
                </StyledTag>
              </li>
            ))}
          </StyledTagsList>
        }
      />
    </>
  );
};

export default Tags;

const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px 16px;
  margin: 0;
  padding: 0;
`;

const StyledTag = styled(NextLink)`
  color: ${({ theme }) => theme.palette.emphasis};
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.text.plain};
    font-weight: normal;
  }
`;
