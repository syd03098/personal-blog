import React from 'react';
import { Post } from '@lib/types';
import styled from '@theme/styled';
import NextLink from '@components/NextLink';

interface Props {
  post: Post;
}

const PostRow = ({ post }: Props): JSX.Element => {
  return (
    <StyledPostRow>
      <StyledPostTitle>
        <NextLink href={`/post/${post.id}`}>{post.title}</NextLink>
      </StyledPostTitle>
      <StyledPostSummary>{post.summary}</StyledPostSummary>
      <StyledPostTagList>
        {post.tags.map((tag) => (
          <StyledNextLink key={tag} href={`/tag/${tag}`}>
            {tag}
          </StyledNextLink>
        ))}
      </StyledPostTagList>
    </StyledPostRow>
  );
};

const StyledPostRow = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

const StyledPostTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin-top: 0;
  margin-bottom: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const StyledPostSummary = styled.p`
  color: ${({ theme }) => theme.text.smoke};
  word-break: break-word;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`;

const StyledPostTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

const StyledNextLink = styled(NextLink)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.emphasis};
`;

export default PostRow;
