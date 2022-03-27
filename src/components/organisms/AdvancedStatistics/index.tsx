import Card from '../../atoms/Card';
import UrlShortenerInput from '../../molecules/UrlShortenerInput';

import { Container, WrapperTitle, Title, Desc } from './styles';

const AdvancedStatistics: React.FC = () => {
  return (
      <Container>
          <UrlShortenerInput style={{ position: 'relative', top: 'calc(-181px / 2)'}} />
          <WrapperTitle>
            <Title>Estatísticas avançadas</Title>
            <Desc>Acompanhe o desempenho de seus links na web com nosso painel de estatísticas avançadas.</Desc>
          </WrapperTitle>
          <Card 
            title="Reconhecimento de Marca"
            desc="Aumente o reconhecimento da sua marca a cada clique. Links genéricos não significam nada. Links de marca ajudam a incutir confiança em seu conteúdo."
          />
      </Container>
  );
}

export default AdvancedStatistics;