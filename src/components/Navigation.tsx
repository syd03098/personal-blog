import NavPopup from '@components/navPopup';
import ThemeSwitch from '@components/navPopup/ThemeSwitch';
import NextLink from '@components/NextLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SiteConfig from '@src/siteConfig';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface Props {
  className?: string;
}

function Navigation({ className }: Props) {
  const [isDarkTheme, setDarkTheme] = useState<boolean>();

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue('--initial-color-mode');

    setDarkTheme(initialTheme === 'dark');
  }, []);

  useEffect(() => {
    if (isDarkTheme === undefined) {
      return;
    }

    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const switchThemeHandler = useCallback(() => {
    if (isDarkTheme === undefined) {
      return;
    }

    setDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const linkList = useMemo(() => SiteConfig.menuItem, []);

  return (
    <nav className={className}>
      <div css={cssFlexSpaceBetween}>
        <NextLink css={homeLinkCss} href="/">
          yongho-kim.com
        </NextLink>
        <div css={cssFlexWrap}>
          <ThemeSwitch isDarkTheme={isDarkTheme} onClick={switchThemeHandler} />
          <NavPopup />
          <Right>
            {linkList.map((link) => (
              <NextLink key={link.url} css={linkCss} href={link.url}>
                {link.label}
              </NextLink>
            ))}
          </Right>
        </div>
      </div>
    </nav>
  );
}

const cssFlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
  max-width: 48rem;
  padding: 1rem;

  @media (max-width: 48rem) {
    padding: 0.3rem 1rem;
  }
`;

const cssFlexWrap = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
`;

const Right = styled.div`
  ${cssFlexWrap};

  @media (max-width: 48rem) {
    display: none;
  }
`;

const linkCss = css`
  color: var(--text-subHeader);
`;

const homeLinkCss = css`
  font-size: 1.075rem;
  line-height: 2.5;
  letter-spacing: -0.03rem;
  user-select: none;

  ${linkCss};
`;

export default Navigation;
