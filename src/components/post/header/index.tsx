import { HeaderType, typographyType } from '@components/post/header/types';
import { css } from '@emotion/react';
import React, { PropsWithChildren } from 'react';

interface HeaderProps {
  type?: HeaderType;
}

const getTypographyColor = (headerType: HeaderType) => {
  switch (headerType) {
    case 'lg':
    // fallthrough
    case 'md':
      return css`
        color: var(--text-header);
      `;
    default:
      return css`
        color: var(--text-subHeader);
      `;
  }
};

function Header({
  children,
  type = 'lg',
  ...rest
}: PropsWithChildren<HeaderProps>): JSX.Element {
  return (
    <h1
      css={css`
        font-size: ${typographyType[type].fontSize}px;
        line-height: ${typographyType[type].lineHeight};
        font-weight: 700;
        word-break: break-word;
        margin: 0;

        ${getTypographyColor(type)}
      `}
      {...rest}
    >
      {children}
    </h1>
  );
}

export default Header;
