import React, { PropsWithChildren } from 'react';
import styled from '@theme/styled';

type HeaderType = 'sm' | 'md' | 'default';

interface Props {
  type?: HeaderType;
}

const Typography = ({
  children,
  type = 'default',
}: PropsWithChildren<Props>): JSX.Element => (
  <StyledTypography className={type !== 'default' && type}>
    {children}
  </StyledTypography>
);

const StyledTypography = styled.h1`
  font-family: 'Noto Sans KR', 'sans-serif';
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.header};
  word-break: break-word;
  line-height: 1.4;
  margin: 0;

  &.md {
    font-size: 36px;
    line-height: 1.2;
  }

  &.sm {
    font-size: 24px;
    line-height: 1.2;
    color: ${({ theme }) => theme.text.subHeader};
  }
`;

export default Typography;
