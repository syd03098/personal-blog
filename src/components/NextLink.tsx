import React, { forwardRef, PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import styled from '@theme/styled';

interface Props {
  href: string;
  scroll?: boolean;
  shallow?: boolean;
  children: ReactNode;
}

const NextLink = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
  (
    { href, scroll, shallow, children, ...rest }: PropsWithChildren<Props>,
    ref,
  ) => {
    const isInternalLink = href && href.startsWith('/');

    if (isInternalLink) {
      return (
        <Link href={href} scroll={scroll} shallow={shallow} passHref>
          <StyledAnchor ref={ref} {...rest}>
            {children}
          </StyledAnchor>
        </Link>
      );
    }

    return (
      <StyledAnchor
        ref={ref}
        target="_blank"
        rel="noreferrer"
        href={href}
        {...rest}
      >
        {children}
      </StyledAnchor>
    );
  },
);

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default NextLink;
