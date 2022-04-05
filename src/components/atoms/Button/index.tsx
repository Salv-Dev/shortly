import React from 'react';
import { Container } from './styles';

interface Props {
  variant?: 'rounded' | 'squared' | 'rounded-ghost',
  style?: React.CSSProperties,
  children: React.ReactNode
}

const Button = ({ children, variant, style } : Props) => {
  return (
    <Container variant={variant} style={style}>
        { children }
    </Container>
  );
}

export default Button;