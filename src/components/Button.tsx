import { css } from '@emotion/react';
import React, { HTMLProps, PropsWithChildren } from 'react';

type ButtonType = 'icon' | 'inline';
type ButtonTheme = 'primary' | 'blank';

export const getButtonAttributes: Readonly<
  Record<
    ButtonType,
    {
      display: string;
      width: string;
    }
  >
> = {
  icon: {
    display: 'flex',
    width: '36px',
  },
  inline: {
    display: 'inline-flex',
    width: 'auto',
  },
};

type ButtonProps = {
  buttonType?: ButtonType;
  buttonTheme?: ButtonTheme;
} & Omit<HTMLProps<HTMLButtonElement>, 'type'>;

function getButtonStyles(buttonTheme: ButtonTheme) {
  switch (buttonTheme) {
    case 'primary': {
      return css`
        background-color: var(--palette-primary-button);
        color: #ffffff;
        border: none;
      `;
    }
    case 'blank': {
      return css`
        border: 1px solid var(--border-default);
        background-color: var(--palette-blank-button);
        color: var(--text-plain);
      `;
    }
    default:
      return undefined;
  }
}

function Button({
  children,
  buttonTheme = 'blank',
  buttonType = 'icon',
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      css={css`
        display: ${getButtonAttributes[buttonType].display};
        align-items: center;
        justify-content: center;

        width: ${getButtonAttributes[buttonType].width};
        height: 36px;
        font-size: 14px;

        ${getButtonStyles(buttonTheme)};
        line-height: normal;
        border-radius: 4px;
        padding: 0;
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
