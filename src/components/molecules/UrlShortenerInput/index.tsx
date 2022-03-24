import Input from '../../atoms/Input';

import { Container } from './styles';

const UrlShortenerInput: React.FC = () => {
  return (
      <Container>
        <Input placeholder="Encurtar um link aqui..." />
      </Container>
  );
}

export default UrlShortenerInput;