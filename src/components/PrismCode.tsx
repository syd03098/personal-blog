import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';

function PrismCode({
  code,
  language,
}: {
  code: string;
  language: string;
}): JSX.Element {
  return (
    <>
      <Highlight
        {...defaultProps}
        language={language.toLowerCase() as Language}
        theme={undefined}
        code={code}
      >
        {({ className, style, tokens, getTokenProps, getLineProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={i} {...getLineProps({ line, key: i })}>
                <LineNum>{i + 1}</LineNum>
                <TableCell>
                  {line.map((token, key) => (
                    <span
                      key={token.content}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
}

export const TableRow = styled.div`
  display: table-row;
`;

export const LineNum = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 20px;
  user-select: none;
  opacity: 0.7;
`;

export const TableCell = styled.span`
  display: table-cell;
  padding-left: 0;
  padding-right: 16px;
`;

export default PrismCode;
