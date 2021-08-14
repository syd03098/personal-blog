import React, { ReactNode } from 'react';
import styled from '@theme/styled';

interface Props {
  title?: ReactNode;
  body: ReactNode;
}

const PageLayout = ({ title, body }: Props): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContentsHeader>{title}</StyledContentsHeader>
      <>{body}</>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledContentsHeader = styled.div`
  margin-bottom: 96px;
`;

export default PageLayout;
