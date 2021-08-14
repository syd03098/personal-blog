import React from 'react';
import { Block, Decoration } from 'notion-types';
import styled from '@theme/styled';

interface Props {
  block: Block;
}

const Text = ({ block }: Props): JSX.Element => {
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
              return <$InlineCode>{acc}</$InlineCode>;
            case 'b':
              return <$Bold>{acc}</$Bold>;
            case 'i':
              return <i>{acc}</i>;
            case 's':
              return <s>{acc}</s>;
            case 'a': {
              const path = current[1];
              return (
                <$Anchor href={path} target="_blank" rel="noreferrer">
                  {acc}
                </$Anchor>
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
};

const $Anchor = styled.a`
  color: ${({ theme }) => theme.palette.emphasis};
  text-decoration: none;
  letter-spacing: normal;
  word-break: break-word;
`;

const $InlineCode = styled.code`
  font-family: 'PT Mono', 'Menlo', 'Source Code Pro', monospace;
  color: ${({ theme }) => theme.text.plain};
  border-radius: 4px;
  padding: 4px 6px;
  background-color: ${({ theme }) => theme.palette.inlineCodeBlock};
`;

const $Bold = styled.b`
  color: ${({ theme }) => theme.text.header};
`;

export default Text;
