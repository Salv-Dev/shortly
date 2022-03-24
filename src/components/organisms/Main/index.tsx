import Banner from '../../molecules/Banner';
import UrlShortenerInput from '../../molecules/UrlShortenerInput';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
        <Banner />
        <UrlShortenerInput />
      </Container>
  );
}

export default Main;