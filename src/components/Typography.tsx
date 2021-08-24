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
  font-size: 42px;
  font-weight: 800;
  color: ${({ theme }) => theme.text.header};
  word-break: break-word;
  line-height: normal;
  margin: 0;

  &.small {
    font-size: 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;

    &.small {
      font-size: 28px;
    }
  }
`;

export default Typography;
