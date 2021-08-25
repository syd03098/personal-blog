import { css } from 'styled-components';

export default css`
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'PT Mono', 'Monaco', Consolas, Menlo, Courier, monospace;

    color: ${({ theme }) => theme.code.plain};
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

  /* 공통 태그 */
  pre[class*='language-'] {
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: ${({ theme }) => theme.code.comment};
    }

    .token.delimiter.important,
    .token.selector .parent,
    .token.tag,
    .token.tag .token.punctuation {
      color: ${({ theme }) => theme.code.className};
    }

    .token.attr-name,
    .token.boolean,
    .token.boolean.important,
    .token.number,
    .token.constant,
    .token.selector .token.attribute {
      color: ${({ theme }) => theme.code.number};
    }

    .token.class-name,
    .token.key,
    .token.parameter,
    .token.property,
    .token.property-access,
    .token.variable {
      color: ${({ theme }) => theme.code.className};
    }

    .token.attr-value,
    .token.inserted,
    .token.color,
    .token.selector .token.value,
    .token.string,
    .token.string .token.url-link {
      color: ${({ theme }) => theme.code.string};
    }

    .token.builtin,
    .token.keyword-array,
    .token.package,
    .token.regex {
      color: ${({ theme }) => theme.code.class};
    }

    .token.function,
    .token.selector .token.class,
    .token.selector .token.id {
      color: ${({ theme }) => theme.code.class};
    }

    .token.atrule .token.rule,
    .token.combinator,
    .token.keyword,
    .token.operator,
    .token.pseudo-class,
    .token.pseudo-element,
    .token.selector,
    .token.unit {
      color: ${({ theme }) => theme.code.keyword};
    }

    .token.deleted,
    .token.important {
      color: ${({ theme }) => theme.code.important};
    }

    .token.keyword-this,
    .token.this {
      color: ${({ theme }) => theme.code.this};
    }

    .token.important,
    .token.keyword-this,
    .token.this,
    .token.bold {
      font-weight: bold;
    }

    .token.delimiter.important {
      font-weight: inherit;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }
`;
