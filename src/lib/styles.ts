import { css } from '@emotion/react';

export const blueLinkCss = css`
  color: var(--palette-link);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
