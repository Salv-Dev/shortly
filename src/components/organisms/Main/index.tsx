import Banner from '../../molecules/Banner';
import AdvancedStatistics from '../AdvancedStatistics';
import BoostYourLinks from '../../molecules/BoostYourLinks';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
        <Banner />
        <AdvancedStatistics />
        <BoostYourLinks />
      </Container>
  );
}

export default Main;