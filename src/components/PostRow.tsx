import NextLink from '@components/NextLink';
import Header from '@components/post/header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { blueLinkCss } from '@lib/styles';
import { PostSummary } from '@lib/types';
import React from 'react';

interface Props {
  postSummary: PostSummary;
  className?: string;
}

function PostRow({ className, postSummary }: Props): JSX.Element {
  return (
    <div className={className}>
      <Header type="sm">
        <NextLink css={titleCss} href={`/post/${postSummary.id}`}>
          {postSummary.title}
        </NextLink>
      </Header>
      <Summary>{postSummary.summary}</Summary>
      {postSummary.tags.length !== 0 && (
        <TagWrap>
          {postSummary.tags.map((tag) => (
            <NextLink key={tag} css={blueTagCss} href={`/tag/${tag}`}>
              {tag}
            </NextLink>
          ))}
        </TagWrap>
      )}
    </div>
  );
}

const Summary = styled.p`
  color: var(--text-smoke);
  word-break: break-word;
  margin-top: 8px;
  margin-bottom: 0;
`;

const TagWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 16px;
`;

const titleCss = css`
  color: var(--text-subHeader);
`;

const blueTagCss = css`
  font-size: 14px;
  ${blueLinkCss};
`;

export default PostRow;
