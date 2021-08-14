import React, { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styled from '@theme/styled';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <StyledLayout>
      <Header />
      <StyledContents>{children}</StyledContents>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StyledContents = styled.main`
  position: relative;
  padding-top: 36px;
  padding-bottom: 36px;
`;

export default RootLayout;
