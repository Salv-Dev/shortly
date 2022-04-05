import React from 'react';
import { Container } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'rounded' | 'squared' | 'rounded-ghost',
  style?: React.CSSProperties,
  children: React.ReactNode
}

const Button = ({ children, variant, style, ...props } : Props) => {
  return (
    <Container variant={variant} style={style} {...props}>
        { children }
    </Container>
  );
}

export default Button;