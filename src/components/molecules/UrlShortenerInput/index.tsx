import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import { Container } from './styles';
import React from 'react';

interface Props {
  style?: React.CSSProperties
}

const UrlShortenerInput = ({ style }: Props) => {
  return (
      <Container style={style}>
        <Input placeholder="Encurtar um link aqui..." />
        <Button>Encurte!</Button>
      </Container>
  );
}

export default UrlShortenerInput;