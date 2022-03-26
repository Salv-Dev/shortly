import React from 'react';

import { Container } from './styles';

interface Props {
    src: string,
    variant?: 'rounded' | 'square'
}

const Icon = ({ src, variant }: Props) => {
  return (
      <Container src={src} variant={variant} ></Container>
  );
}

export default Icon;