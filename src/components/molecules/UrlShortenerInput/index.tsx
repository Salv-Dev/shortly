import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import api from '../../../helpers/customInstanceAxios';

import { Container } from './styles';
import React, { useState } from 'react';

interface Props {
  style?: React.CSSProperties
}

const UrlShortenerInput = ({ style }: Props) => {
  const [link, setLink] = useState('');
  const [shortedLink, setShortedLink] = useState('');

  async function shortLink(link:string) {
    const result = await api.get(link);
    return result;
  }

  function changeText(e:React.ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
  }

  return (
      <Container style={style}>
        <Input placeholder="Encurtar um link aqui..." value={link} onChange={changeText}/>
        <Button onClick={() => shortLink(link)}>Encurte!</Button>
      </Container>
  );
}

export default UrlShortenerInput;