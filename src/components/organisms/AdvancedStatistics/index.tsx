import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';
import UrlShortenerInput from '../../molecules/UrlShortenerInput';
import DataCards from '../../../helpers/cardInfos';

import { Container, WrapperTitle, Title, Desc, BackgroundIcon } from './styles';

const AdvancedStatistics: React.FC = () => {
  return (
      <Container>
          <UrlShortenerInput />
          <WrapperTitle>
            <Title>Estatísticas avançadas</Title>
            <Desc>Acompanhe o desempenho de seus links na web com nosso painel de estatísticas avançadas.</Desc>
          </WrapperTitle>
          
          {DataCards.map(data => (
            <Card 
              title={data.title}
              desc={data.desc}
              key={data.title}
            >
              <BackgroundIcon>
                <Icon 
                  name={data.iconName}
                 />
              </BackgroundIcon>
            </Card>
          ))}
          
      </Container>
  );
}

export default AdvancedStatistics;