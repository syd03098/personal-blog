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
    <>
      <Navigation css={navigationCss} />
      <Contents>
        <main>{children}</main>
        <Footer />
      </Contents>
    </>
  );
}

const navigationCss = css`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--navigation);
  border-bottom: 1px solid var(--border-navigation);
`;

const Contents = styled.div`
  max-width: 48rem;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
`;

export default RootLayout;
