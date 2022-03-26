import Banner from '../../molecules/Banner';
import AdvancedStatistics from '../../molecules/AdvancedStatistics';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
        <Banner />
        <AdvancedStatistics />
      </Container>
  );
}

export default Main;