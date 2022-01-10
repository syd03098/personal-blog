import NextLink from '@components/NextLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Block, Decoration } from 'notion-types';
import React from 'react';

interface Props {
  block: Block;
}

function Text({ block }: Props): JSX.Element {
  const values = block.properties.title as Decoration[];
  return (
    <>
      {values.map(([text, decoration], num) => {
        if (!decoration) {
          // eslint-disable-next-line react/no-array-index-key
          return <React.Fragment key={num}>{text}</React.Fragment>;
        }

        const innerContents = decoration.reduce((acc, current) => {
          switch (current[0]) {
            case 'c':
              return <Inline>{acc}</Inline>;
            case 'b':
              return <b>{acc}</b>;
            case 'i':
              return <i>{acc}</i>;
            case 's':
              return <s>{acc}</s>;
            case 'a': {
              const path = current[1];
              return (
                <NextLink css={linkCss} href={path}>
                  {acc}
                </NextLink>
              );
            }
            default:
              return acc;
          }
        }, <>{text}</>);

        // eslint-disable-next-line react/no-array-index-key
        return <React.Fragment key={num}>{innerContents}</React.Fragment>;
      })}
    </>
  );
}

const linkCss = css`
  color: var(--palette-link);
  text-decoration: none;
`;

const Inline = styled.code`
  font-family: var(--font-inline-code);
  color: var(--text-plain);
  border-radius: 4px;
  font-size: 0.875em;
  padding: 3px 6px;
  margin: 0 1px;
  background-color: var(--palette-code-inline);
  border: 1px solid var(--border-image);
`;

export default Text;
