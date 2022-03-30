import Logo from '../../atoms/Logo';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Logo src="/images/logo.svg" href="/"/>
      </Container>
  );
}

export default Footer;