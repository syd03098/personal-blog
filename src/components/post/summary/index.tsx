import NextLink from '@components/NextLink';
import Header from '@components/post/header';
import PublishedTime from '@components/post/summary/PublishedTime';
import styled from '@emotion/styled';
import { Post } from '@lib/types';
import React from 'react';

interface Props {
  summary: Post;
  className?: string;
}

function Summary({ summary, className }: Props): JSX.Element {
  return (
    <section className={className}>
      <Header type="md">{summary.title}</Header>
      <PublishedTime
        createdAt={summary.createdAt}
        lastUpdatedAt={summary.lastUpdatedAt}
      />
      {summary.tags.length !== 0 && (
        <FlexWrap>
          {summary.tags.map((tag) => (
            <TagItem key={tag}>
              <NextLink href={`/tag/${tag}`}>{tag}</NextLink>
            </TagItem>
          ))}
        </FlexWrap>
      )}
    </section>
  );
}

const FlexWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

const TagItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: var(--palette-link);

  &:hover,
  &:focus {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export default Summary;
