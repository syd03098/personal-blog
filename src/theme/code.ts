import { css } from 'styled-components';

export default css`
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'PT Mono', 'Monaco', 'Courier New', monospace;

    color: ${({ theme }) => theme.text.plain};
    background: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    tab-size: 4;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 16px;
    margin: 8px 0;
    overflow: auto;
    width: 100%;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${({ theme }) => theme.palette.codeBlock};
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 6px;
    border-radius: 6px;
    white-space: normal;
  }

  pre[class*='language-html'] {
    .token.tag {
      color: rgb(86, 156, 214);
    }
    .token.attr-name {
      color: #67b7a4;
    }
    .token.attr-value {
      color: #d0bf96;
    }
  }

  /* 공통 태그 */
  pre[class*='language-'] {
    .token.prolog,
    .token.comment {
      color: #6c7986;
    }

    .token.punctuation,
    .token.operator {
      color: ${({ theme }) => theme.text.plain};
    }

    .token.class-name {
      color: #9ef1dd;
    }

    .token.attr-name,
    .token.function,
    .token.variable {
      color: #67b7a4;
    }

    .token.selector,
    .token.char,
    .token.builtin,
    .token.changed,
    .token.keyword {
      color: #fc5fa3;
    }

    .token.string,
    .token.number,
    .token.boolean,
    .token.inserted,
    .token.attr-value {
      color: #d0bf69;
    }

    /* 볼드, 이탤릭 */
    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
  }
`;
