import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

function Page({ children }: { children: ReactNode }): JSX.Element {
  return (
    <article
      css={css`
        display: flex;
        flex-direction: column;
        text-align: left;

        h2 {
          ${headerCss};
          font-size: 28px;
        }

        p {
          margin: 1rem 0;
        }

        ul {
          padding-left: 1.275rem;
          margin: 0;
        }

        li {
          margin: 4px 0;
        }
      `}
    >
      {children}
    </article>
  );
}

const headerCss = css`
  font-weight: 700;
  margin-top: 2.2rem;
  margin-bottom: 0;
  color: var(--text-subHeader);
`;

export default Page;
