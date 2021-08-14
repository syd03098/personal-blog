import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import normalize from '@theme/normalize';
import code from '@theme/code';

const globalStyle = css`
  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  a,
  button {
    &:hover {
      cursor: pointer;
    }
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
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.text.plain};
  }
`;

export default createGlobalStyle`
  ${globalStyle}
  ${normalize}
  ${code}
`;
