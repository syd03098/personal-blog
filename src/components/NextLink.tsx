import { css } from '@emotion/react';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type LinkProps = { href: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>;

function NextLink({ href, children, ...rest }: PropsWithChildren<LinkProps>) {
  const isInternalLink = href.startsWith('/');

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a css={linkCss} {...rest}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a css={linkCss} target="_blank" rel="noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
}

const linkCss = css`
  text-decoration: none;
  color: currentColor;
`;

export default NextLink;
