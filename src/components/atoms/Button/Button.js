import React from 'react';
import { StyledButton } from './Button.styles';

export const FontSizesButton = {
  XXL: 'xxl',
  XL: 'xl',
  L: 'l',
  M: 'm',
  SM: 'sm',
  S: 's',
  XS: 'xs',
  XXS: 'xxs',
}

const Button = ({ children, fontSize = FontSizesButton.M, margintb = 0, marginlr = 0, submit, disabled }) => {
  return (
    <StyledButton type={submit ? 'submit' : 'button'} disabled={disabled} fontSizeB={fontSize} margintb={margintb} marginlr={marginlr}>
      {children}
    </StyledButton>
  );
};

export default Button;
