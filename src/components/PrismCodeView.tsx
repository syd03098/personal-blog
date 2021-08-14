import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from '@theme/styled';

const PrismCodeView = ({
  code,
  language,
}: {
  code: string;
  language: string;
}): JSX.Element => {
  return (
    <>
      <Highlight
        {...defaultProps}
        language={language.toLowerCase() as Language}
        theme={null}
        code={code}
      >
        {({ className, style, tokens, getTokenProps, getLineProps }) => (
          <$pre className={className} style={style}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <$tableRow key={i} {...getLineProps({ line, key: i })}>
                <StyledLineNo>{i + 1}</StyledLineNo>
                <$tableCell>
                  {line.map((token, key) => (
                    <span
                      key={token.content}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </$tableCell>
              </$tableRow>
            ))}
          </$pre>
        )}
      </Highlight>
    </>
  );
};

export const $pre = styled.pre`
  position: relative;
  border-radius: 8px;
  letter-spacing: normal;
  font-size: 15px;
`;

export const $tableRow = styled.div`
  display: table-row;
`;

export const StyledLineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 20px;
  user-select: none;
  opacity: 0.6;
`;

export const $tableCell = styled.span`
  display: table-cell;
  padding-left: 0;
  padding-right: 16px;
`;

export default PrismCodeView;
