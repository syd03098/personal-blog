import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import {
  Menu as ReakitMenu,
  MenuButton as ReakitMenuButton,
  MenuItem as ReakitMenuItem,
  useMenuState,
} from 'reakit/Menu';

function NavPopup() {
  const props = useMenuState({ gutter: 4 });

  return (
    <>
      <MenuButton aria-label="open navigation panel" {...props}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </MenuButton>
      <ReakitMenu
        {...props}
        aria-label="navigation"
        css={css`
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-default);
          border-radius: 4px;

          background-color: var(--palette-code-block);
          overflow: hidden;
          gap: 8px;
          padding: 4px;
          min-width: 12rem;

          @media (min-width: 48rem) {
            display: none;
          }
        `}
      >
        <ReakitMenuItem as="a" href="/tag" css={menuItemCss} {...props}>
          Tags
        </ReakitMenuItem>
        <ReakitMenuItem as="a" href="/about" css={menuItemCss} {...props}>
          About
        </ReakitMenuItem>
      </ReakitMenu>
    </>
  );
}

const MenuButton = styled(ReakitMenuButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 4px;

  background-color: var(--palette-code-inline);
  border: 1px solid var(--border-image);
  color: var(--text-plain);

  @media (min-width: 48rem) {
    display: none;
  }
`;

const menuItemCss = css`
  display: flex;
  align-items: center;
  text-align: left;
  flex: 0 0 auto;

  color: var(--text-plain);
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-inline: 0.8rem;
  text-decoration: none;
  user-select: none;
  border-radius: 4px;
`;

export default NavPopup;
