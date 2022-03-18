import { Container, Image } from './styles';

const Logo: React.FC = () => {
  return (
      <Container>
          <Image src="/images/logo.svg" alt="Logo da Shortly na cor azul escuro" />
      </Container>
  );
}

export default Logo;