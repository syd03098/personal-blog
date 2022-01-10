import { css } from '@emotion/react';

const codeCss = css`
  code[class*='language-'],
  pre[class*='language-'] {
    background: var(--palette-code-block);
    border: 1px solid var(--border-image);

    color: var(--code-mono1);
    font-family: var(--font-inline-code);

    text-align: left;
    white-space: pre;
    letter-spacing: normal;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    tab-size: 4;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1rem;
    margin: 0.5rem 0;
    overflow: auto;
    width: 100%;

    border-radius: 8px;
    font-size: 0.875rem;

    ::-webkit-scrollbar {
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--text-smoke);
    }
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: var(--code-mono3);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: var(--code-mono1);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: var(--code-hue6);
  }

  .token.keyword {
    color: var(--code-hue3);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--code-hue5);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: var(--code-hue4);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: var(--code-hue2);
  }

  .token.url {
    color: var(--code-hue1);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: var(--code-mono1);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: var(--code-hue5);
  }

  .language-css .token.property {
    color: var(--code-mono1);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: var(--code-hue1);
  }

  .language-css .token.url > .token.string.url {
    color: var(--code-hue4);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: var(--code-mono3);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: var(--code-mono3);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: var(--code-hue52);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: var(--code-mono1);
  }

  .language-json .token.null.keyword {
    color: var(--code-hue6);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: var(--code-mono1);
  }

  .language-markdown .token.url > .token.content {
    color: var(--code-hue2);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: var(--code-hue1);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: var(--code-mono3);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: var(--code-hue4);
  }

  .language-markdown .token.bold .token.content {
    color: var(--code-hue6);
  }

  .language-markdown .token.italic .token.content {
    color: var(--code-mono3);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: var(--code-hue5);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }
`;

export default codeCss;
