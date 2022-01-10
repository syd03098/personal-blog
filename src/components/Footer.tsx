import NextLink from '@components/NextLink';
import { css } from '@emotion/react';
import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer css={flexColumnCss}>
      <p css={paragraph}>© Yongho Kim 2021 All Rights Reserved.</p>
      <p css={paragraph}>
        Built by&nbsp;
        <NextLink href="https://nextjs.org/">Next.js&nbsp;</NextLink>
        &&nbsp;
        <NextLink href="https://emotion.sh/docs/introduction">
          @emotion&nbsp;
        </NextLink>
        &&nbsp;
        <NextLink href="https://developers.notion.com/docs/getting-started">
          Notion-beta
        </NextLink>
      </p>
    </footer>
  );
}

const flexColumnCss = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 36px 0;
`;

const paragraph = css`
  font-size: 14px;
  color: var(--text-smoke);
  word-break: break-all;
  letter-spacing: normal;
  margin: 0;

  a {
    color: var(--text-plain);
    font-weight: 600;
  }
`;

export default Footer;
