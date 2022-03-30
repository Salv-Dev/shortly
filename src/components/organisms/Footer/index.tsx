import Logo from '../../atoms/Logo';
import {ReactComponent as LogoSVG} from './../../../assets/images/logo.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Logo href="/" svg={<LogoSVG />} fill="white" />
      </Container>
  );
}

export default Footer;