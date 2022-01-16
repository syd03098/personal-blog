import { css } from '@emotion/react';

export const menuCss = css`
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
`;

export const menuItemCss = css`
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
