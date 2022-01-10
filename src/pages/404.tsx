import Button from '@components/Button';
import NextLink from '@components/NextLink';
import Header from '@components/post/header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

function PageNotFound(): JSX.Element {
  return (
    <FlexColumn>
      <Header>404</Header>
      <p css={messageCss}>Current Page is not exist.</p>
      <p css={messageCss}>このページは存在しません。</p>
      <Button
        css={buttonCss}
        buttonType="inline"
        buttonTheme="primary"
        aria-label="back to home"
      >
        <NextLink href="/">Back to home</NextLink>
      </Button>
    </FlexColumn>
  );
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 20vh;
  padding-bottom: 20vh;
`;

const messageCss = css`
  font-size: 16px;
  color: var(--text-plain);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const buttonCss = css`
  padding: 0 0.5rem;
  margin: 0.5rem;
`;

export default PageNotFound;
