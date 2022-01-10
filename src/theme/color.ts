import { css } from '@emotion/react';

const colorPalette = css`
  :root {
    --font-inline-code: 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;

    --background: #ffffff;
    --navigation: #fafafa;

    --text-header: #000000;
    --text-subHeader: #191f28;
    --text-plain: #333d4b;
    --text-smoke: #6b7684;

    --border-default: rgb(210, 214, 218);
    --border-image: var(--border-default);
    --border-navigation: var(--border-default);

    --palette-link: #1957c2;
    --palette-code-inline: rgb(240, 241, 243);
    --palette-code-block: rgb(240, 241, 243);

    --palette-primary-button: #218bff;
    --palette-codeblock-button: var(--palette-code-inline);
    --palette-blank-button: transparent;

    --code-mono1: hsl(230, 8%, 24%);
    --code-mono2: hsl(230, 6%, 44%);
    --code-mono3: hsl(230, 4% 64%);
    --code-hue1: hsl(198, 99%, 37%);
    --code-hue2: hsl(221, 87%, 60%);
    --code-hue3: hsl(301, 63%, 40%);
    --code-hue4: hsl(119, 34%, 47%);
    --code-hue5: hsl(5, 74%, 59%);
    --code-hue52: hsl(344, 84%, 43%);
    --code-hue6: hsl(35, 99%, 36%);
    --code-hue62: hsl(35, 99%, 40%);
  }

  [data-theme='dark'] {
    --background: #0d1111;
    --navigation: #161b22;

    --text-header: #ededed;
    --text-subHeader: #e0e0e0;
    --text-plain: #dadada;
    --text-smoke: #838383;

    --border-default: rgba(255, 255, 255, 0.16);
    --border-image: transparent;
    --border-navigation: #30363d;

    --palette-link: #58a6ff;
    --palette-code-inline: #22364e;
    --palette-code-block: #111b27;

    --palette-primary-button: #1f6feb;
    --palette-codeblock-button: var(--palette-code-block);
    --palette-blank-button: transparent;

    --code-mono1: hsl(220, 14%, 71%);
    --code-mono2: hsl(220, 9%, 55%);
    --code-mono3: hsl(220, 10%, 40%);
    --code-hue1: hsl(187, 47%, 55%);
    --code-hue2: hsl(207, 82%, 66%);
    --code-hue3: hsl(286, 60%, 67%);
    --code-hue4: hsl(95, 38%, 62%);
    --code-hue5: hsl(355, 65%, 65%);
    --code-hue52: hsl(5, 48%, 51%);
    --code-hue6: hsl(29, 54%, 61%);
    --code-hue62: hsl(39, 67%, 69%);
  }
`;

export default colorPalette;
