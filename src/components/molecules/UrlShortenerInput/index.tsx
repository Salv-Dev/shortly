import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import api from '../../../helpers/customInstanceAxios';
import UrlShortenerResult from './UrlShortenerResult';

import { Container, WrapperUrlShortenerResult } from './styles';
import React, { useRef, useState } from 'react';

interface Props {
  style?: React.CSSProperties
}

interface ErrorInfo {
  error: boolean,
  errorMsg?: string
}

interface ShortenedLinkInfo {
  original: string,
  short: string,
  isCopied: boolean
}

const UrlShortenerInput = ({ style }: Props) => {
  const inputEl = useRef<null | HTMLInputElement>(null);
  const [link, setLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState<ShortenedLinkInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [er, setEr] = useState<ErrorInfo>({error: false});

  async function shortLink(link:string) {
    try {
      const res = await api.get(link);
      const short:string = res.data.result.full_short_link;
      const shortInfo = {original: link, short, isCopied: false};
      
      setLoading(false);
      setLink('');
      inputEl.current?.focus();
      setShortenedLink((prev) => [...prev, shortInfo]);
    } catch(e) {
      setEr({ error: true });
      setLoading(false);
      inputEl.current?.focus();
    }
  }

  function setCopied(i:number) {
    setShortenedLink(prev => {
      prev.forEach(el => el.isCopied = false);
      prev[i].isCopied = true;
      return [...prev];
    });
  }

  function copyToClipboard(shortenedUrl:string, i:number) {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(i);
  }

  function clickBtnSubmit() {
    if(link.length === 0) {
      setEr({error: true, errorMsg: 'Adicione algum link primeiro'});
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
        {shortenedLink.length > 0 &&
        <WrapperUrlShortenerResult>
          {shortenedLink.map((el, i) => (
            <UrlShortenerResult key={i} originalUrl={el.original} shortenedUrl={el.short} onClick={() => copyToClipboard(el.short, i)} isCopy={el.isCopied}/>
          ))}
        </WrapperUrlShortenerResult>
        }
      </>
  );
}

export default UrlShortenerInput;