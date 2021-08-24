import React, { memo } from 'react';
import { Post } from '@lib/types';
import styled from '@theme/styled';
import Typography from '@components/Typography';
import { parseTimeFromNow } from '@lib/functions';
import NextLink from '@components/NextLink';

interface Props {
  post: Post;
}

const PostDetailRow = ({ post }: Props): JSX.Element => {
  return (
    <>
      <StyledDetailRow>
        <Typography>{post.title}</Typography>
        <StyledDate>
          🕑&nbsp; Published&nbsp;
          {new Date(post.createdAt)
            .toLocaleString('en-us', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })
            .toLowerCase()}
          , 👀&nbsp; Updated {parseTimeFromNow(post.lastUpdatedAt)}
        </StyledDate>
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
      </StyledDetailRow>
    </>
  );
};

export default memo(PostDetailRow);

const StyledDetailRow = styled.section`
  margin-bottom: 48px;
`;

const StyledDate = styled.time`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.text.smoke};
  word-break: break-word;
  margin-top: 16px;
  margin-bottom: 0;
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
