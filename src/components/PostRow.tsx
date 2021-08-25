import React from 'react';
import { Post } from '@lib/types';
import styled from '@theme/styled';
import NextLink from '@components/NextLink';
import Typography from '@components/Typography';

interface Props {
  post: Post;
}

const PostRow = ({ post }: Props): JSX.Element => {
  return (
    <StyledPostRow>
      <Typography type="sm">
        <NextLink href={`/post/${post.id}`}>{post.title}</NextLink>
      </Typography>
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

const StyledPostSummary = styled.p`
  color: ${({ theme }) => theme.text.smoke};
  word-break: break-word;
  margin-top: 16px;
  margin-bottom: 0;
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
