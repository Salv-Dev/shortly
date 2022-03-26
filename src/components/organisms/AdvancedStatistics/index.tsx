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
      </Container>
  );
}

export default AdvancedStatistics;