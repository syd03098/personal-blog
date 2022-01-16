import { menuCss, menuItemCss } from '@components/navPopup/styles';
import styled from '@emotion/styled';
import React from 'react';
import {
  Menu as ReakitMenu,
  MenuButton as ReakitMenuButton,
  MenuItem as ReakitMenuItem,
  useMenuState,
} from 'reakit/Menu';

interface Props {
  linkList: {
    label: string;
    url: string;
  }[];
}

function NavPopup({ linkList }: Props) {
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
      <ReakitMenu {...props} aria-label="navigation" css={menuCss}>
        {linkList.map((link) => (
          <ReakitMenuItem
            key={link.label}
            as="a"
            href={link.url}
            css={menuItemCss}
            {...props}
          >
            {link.label}
          </ReakitMenuItem>
        ))}
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

export default NavPopup;
