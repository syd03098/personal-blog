import React from 'react';
import styled from '@theme/styled';
import Typography from '@components/Typography';
import { Post } from '@lib/types';
import TimeStamp from '@components/PostContentsView/PostSummary/TimeStamp';
import NextLink from '@components/NextLink';

interface Props {
  post: Post;
}

const PostSummary = ({ post }: Props): JSX.Element => {
  return (
    <StyledPostSummarySection>
      <Typography type="md">{post.title}</Typography>
      <TimeStamp
        createdAt={post.createdAt}
        lastUpdatedAt={post.lastUpdatedAt}
      />
      {post.tags.length !== 0 && (
        <StyledTagList>
          {post.tags.map((tag) => (
            <li key={tag}>
              <NextLink href={`/tag/${tag}`}>
                <StyledTag>{tag}</StyledTag>
              </NextLink>
            </li>
          ))}
        </StyledTagList>
      )}
    </StyledPostSummarySection>
  );
};

export default PostSummary;

const StyledPostSummarySection = styled.section`
  margin-bottom: 48px;
`;

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px 4px;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 0;
`;

const StyledTag = styled.div`
  font-weight: bolder;
  font-size: 14px;
  padding: 6px;
  border: 2px solid ${({ theme }) => theme.border.primary};
  background-color: transparent;
  border-radius: 8px;
  opacity: 0.9;
`;
