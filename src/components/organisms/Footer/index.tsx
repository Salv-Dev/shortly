import Logo from '../../atoms/Logo';
import {ReactComponent as LogoSVG} from './../../../assets/images/logo.svg';
import List from '../../atoms/List';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Logo href="/" svg={<LogoSVG />} fill="white" />
          <List title="Recursos" style={{ color: 'white' }}></List>
      </Container>
  );
}

export default Footer;