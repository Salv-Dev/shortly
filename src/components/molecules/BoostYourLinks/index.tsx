import { Container, Title } from './styles';
import Button from '../../atoms/Button';

const BoostYourLinks: React.FC = () => {
  return (
      <Container>
          <Title>Dê um boost em seus links hoje</Title>
          <Button variant="rounded">Vamos lá!</Button>
      </Container>
  );
}

export default BoostYourLinks;