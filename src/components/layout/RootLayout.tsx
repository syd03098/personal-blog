import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function RootLayout({ children }: Props): JSX.Element {
  return (
    <Root>
      <Navigation css={navigationCss} />
      <Contents>
        <main css={mainCss}>{children}</main>
        <Footer />
      </Contents>
    </Root>
  );
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const navigationCss = css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--navigation);
  border-bottom: 1px solid var(--border-navigation);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;

  padding-top: 6.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin: 0 auto;
  height: 100%;

  @media (max-width: 48rem) {
    padding-top: 4.5rem;
  }
`;

const mainCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`;

export default RootLayout;
