import React from 'react';
import { Container } from './styles';

interface Props {
  variant?: string
  children: React.ReactNode
}

const Button = ({ children, variant } : Props) => {
  return (
    <Container variant={variant}>
        { children }
    </Container>
  );
}

export default Button;