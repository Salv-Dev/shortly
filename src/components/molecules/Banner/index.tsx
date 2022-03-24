import Button from '../../atoms/Button';

import { Container, Bg, TextWrapper, Title, Desc } from './styles';

const Banner: React.FC = () => {
  return (
      <Container>
        <Bg />
        <TextWrapper>
            <Title>Mais do que apenas um link mais curto</Title>
            <Desc>Construa o reconhecimento da sua marca e obtenha informações do desempenho dos seus links.</Desc>
            <Button variant="rounded">Vamos lá!</Button>
        </TextWrapper>
      </Container>
  );
}

export default Banner;