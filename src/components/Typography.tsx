import React, { PropsWithChildren } from 'react';
import styled from '@theme/styled';

type HeaderType = 'small' | 'default';

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
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.text.header};
  word-break: break-word;
  margin: 0;

  &.small {
    font-size: 34px;
    line-height: normal;
  }
`;

export default Typography;
