import React from 'react';

import { Container } from './styles';

interface Props {
    src: string,
    variant?: 'rounded' | 'square',
    style?: React.CSSProperties
}

const Icon = ({ src, variant, style }: Props) => {
  return (
      <Container src={src} variant={variant} style={style}></Container>
  );
}

export default Icon;