import React from 'react';
import { Container } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'rounded' | 'squared' | 'rounded-ghost',
  style?: React.CSSProperties,
  children: React.ReactNode,
  disabled?: boolean
}

const Button = ({ children, variant, style, disabled = false, ...props } : Props) => {
  return (
    <Container variant={variant} style={style} {...props} disabled={disabled}>
        { children }
    </Container>
  );
}

export default Button;