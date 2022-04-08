import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import api from '../../../helpers/customInstanceAxios';
import UrlShortenerResult from '../UrlShortenerResult';

import { Container, WrapperUrlShortenerResult } from './styles';
import React, { useRef, useState } from 'react';

interface Props {
  style?: React.CSSProperties
}

interface ErrorInfo {
  error: boolean,
  errorMsg?: string
}

const UrlShortenerInput = ({ style }: Props) => {
  const inputEl = useRef<null | HTMLInputElement>(null);
  const [link, setLink] = useState('');
  const [shortedLink, setShortedLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [er, setEr] = useState<ErrorInfo>({error: false});

  async function shortLink(link:string) {
    try {
      const result = await api.get(link);
      setLoading(false);
      console.log(result.data);
      setLink('');
      console.log(inputEl.current);

      inputEl.current?.focus();

      return result.data;
    } catch(e) {
      setEr({ error: true });
      setLoading(false);
      inputEl.current?.focus();
    }
  }

  function clickBtnSubmit() {
    if(link.length === 0) {
      setEr({error: true, errorMsg: 'Adicione algum link antes'});
      return
    }
    setEr({error: false})
    setLoading(true);
    shortLink(link);
  }

  function changeValueInput(e:React.ChangeEvent<HTMLInputElement>) {
    if(er.error) {
      setEr({ error: false });
    }
    setLink(e.target.value);
  }

  function enterKeySubmit(e:React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') clickBtnSubmit();
  }

  return (
      <>
        <Container style={style}>
          <Input 
            ref={inputEl}
            placeholder="Encurtar um link aqui..."
            value={link}
            onChange={changeValueInput}
            onKeyDown={enterKeySubmit}
            error={er.error} 
            errorMsg={er.errorMsg}
          />
          <Button onClick={clickBtnSubmit}>{loading ? 'Encurtando...' : 'Encurte!'}</Button>
        </Container>
        <WrapperUrlShortenerResult>
          <UrlShortenerResult originalUrl="https://teste.com" shortenedUrl="https://tst.com" />
          <UrlShortenerResult originalUrl="https://teste.com" shortenedUrl="https://tst.com" />
        </WrapperUrlShortenerResult>
      </>
  );
}

export default UrlShortenerInput;