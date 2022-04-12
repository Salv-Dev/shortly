import { MouseEventHandler, useEffect, useState } from 'react';
import Button from '../../../atoms/Button';

import { Container, OriginalUrl, ShortenedUrl, Hr } from './styles';

interface Props {
    originalUrl: string,
    shortenedUrl: string,
    onClick: MouseEventHandler,
    isCopy: boolean
}

const UrlShortenerResult = ({ originalUrl, shortenedUrl, onClick, isCopy }:Props) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    console.log(isCopy);
  }, [isCopy])
  
  
  return (
      <Container>
          <OriginalUrl>{originalUrl}</OriginalUrl>
          <Hr />
          <ShortenedUrl>{shortenedUrl}</ShortenedUrl>
          <Button
            onClick={onClick}
            disabled={isCopy && true}
            style={{ 
                    margin: '0 20px 20px 20px',
                    padding: '10px 0',
                    backgroundColor: (isCopy ? '#3b3054' : '#2acfcf'),
                    borderColor: (isCopy ? '#3b3054' : '#2acfcf')
                }}>{isCopy ? 'Copiado!' : 'Copiar'}</Button>
      </Container>
  );
}

export default UrlShortenerResult;