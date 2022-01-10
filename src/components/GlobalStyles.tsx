import { css, Global } from '@emotion/react';
import codeCss from '@theme/code';
import colorPalette from '@theme/color';
import normalize from 'emotion-normalize';
import React from 'react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${normalize};
        ${colorPalette};

        * {
          box-sizing: border-box;
        }

        a,
        button {
          &:hover {
            cursor: pointer;
          }
        }

        b,
        strong {
          font-weight: bold;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            'Hiragino Kaku Gothic ProN', 'Apple Color Emoji', Arial, sans-serif,
            'Segoe UI Emoji', 'Segoe UI Symbol';
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          line-height: 1.65;
          letter-spacing: 0.03em;
          background-color: var(--background);
          color: var(--text-plain);
        }

        ${codeCss};
      `}
    />
  );
}

export default GlobalStyles;
