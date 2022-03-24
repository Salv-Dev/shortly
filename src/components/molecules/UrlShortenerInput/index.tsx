import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import { Container } from './styles';

const UrlShortenerInput: React.FC = () => {
  return (
      <Container>
        <Input placeholder="Encurtar um link aqui..." />
        <Button>Encurte!</Button>
      </Container>
  );
}

export default UrlShortenerInput;