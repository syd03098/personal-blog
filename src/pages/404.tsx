import React from 'react';
import styled from '@theme/styled';

const PageNotFound = (): JSX.Element => {
  return (
    <>
      <StyledPageNotFoundTitle>👀 404!</StyledPageNotFoundTitle>
      <section>
        <StyledPageNotFoundMessage>
          해당페이지는 존재하지 않습니다. Url이 잘못 되었거나 삭제된
          포스트입니다.
        </StyledPageNotFoundMessage>
        <StyledPageNotFoundMessage>
          Current Page is not exist.
        </StyledPageNotFoundMessage>
        <StyledPageNotFoundMessage>
          このページは存在しません。間違ったリンクまたは削除されたリンクかもしれません。
        </StyledPageNotFoundMessage>
      </section>
    </>
  );
};

const StyledPageNotFoundTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: normal;
`;

const StyledPageNotFoundMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export default PageNotFound;
