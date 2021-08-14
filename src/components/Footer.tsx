import React from 'react';
import styled from '@theme/styled';
import NextLink from '@components/NextLink';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledAuthorDetails>
        <p>© Yongho Kim 2021</p>
        <p>
          🛠 &nbsp;Built by&nbsp;
          <NextLink href="https://nextjs.org/">Next.js&nbsp;</NextLink>
          &&nbsp;
          <NextLink href="https://styled-components.com/">
            Styled-components&nbsp;
          </NextLink>
          &&nbsp;
          <NextLink href="https://developers.notion.com/docs/getting-started">
            Notion-beta
          </NextLink>
        </p>
      </StyledAuthorDetails>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-top: 64px;
  padding-bottom: 64px;
`;

const StyledAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    margin: 0;
    letter-spacing: normal;
    color: ${({ theme }) => theme.text.smoke};

    &:last-child {
      font-size: 14px;
      word-break: break-all;
      a {
        color: ${({ theme }) => theme.text.plain};
      }
    }
  }
`;

export default Footer;
