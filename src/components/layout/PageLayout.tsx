import Header from '@components/post/header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  body: ReactNode;
}

function PageLayout({ title, body }: Props): JSX.Element {
  return (
    <>
      <Header css={titleCss}>{title}</Header>
      <FlexColumn>{body}</FlexColumn>
    </>
  );
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const titleCss = css`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export default PageLayout;
