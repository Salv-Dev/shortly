import React from 'react';
import Icons from '../../../helpers/iconsSwitcher';

import { Container } from './styles';

interface Props {
    name:  string,
    size?: number,
    color?: string,
    style?: React.CSSProperties
}

const Icon = ({ name, style, size, color }: Props) => {
  return (
      <Container size={size || 40} color={color} style={style}>
        {Icons(name)}
      </Container>
  );
}

export default Icon;