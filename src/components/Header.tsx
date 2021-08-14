import React from 'react';
import styled from '@theme/styled';
import NextLink from '@components/NextLink';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledHeaderLayout>
        <StyledHome>
          <NextLink href="/">yongho-kim.com</NextLink>
        </StyledHome>
        <StyledNavigation>
          <StyledNextLink href="/tag">Tags</StyledNextLink>
          <StyledNextLink href="/archive">Archive</StyledNextLink>
          <StyledNextLink href="/about">About</StyledNextLink>
        </StyledNavigation>
      </StyledHeaderLayout>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const StyledHeaderLayout = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledHome = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.plain};
  margin: 0 36px 0 0;
  letter-spacing: -0.03em;
  user-select: none;
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledNextLink = styled(NextLink)`
  color: ${({ theme }) => theme.text.smoke};
  margin: 8px 16px 8px 0;
  transition: color 0.1s ease;

  &:last-child {
    margin: 8px 0;
  }
  &:hover {
    color: ${({ theme }) => theme.text.plain};
  }
`;

export default Header;
