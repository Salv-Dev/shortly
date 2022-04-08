import { useState } from 'react';
import Button from '../../atoms/Button';

import { Container, OriginalUrl, ShortenedUrl, Hr } from './styles';

interface Props {
    originalUrl: string,
    shortenedUrl: string
}

const UrlShortenerResult = ({ originalUrl, shortenedUrl}:Props) => {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
  }
  
  return (
      <Container>
          <OriginalUrl>{originalUrl}</OriginalUrl>
          <Hr />
          <ShortenedUrl>{shortenedUrl}</ShortenedUrl>
          <Button
            onClick={copyToClipboard}
            style={{ 
                    margin: '0 20px 20px 20px',
                    padding: '10px 0',
                    backgroundColor: (isCopied ? '#3b3054' : '#2acfcf'),
                    borderColor: (isCopied ? '#3b3054' : '#2acfcf')
                }}>{isCopied ? 'Copiado!' : 'Copiar'}</Button>
      </Container>
  );
}

export default UrlShortenerResult;