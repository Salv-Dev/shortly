import Logo from '../../atoms/Logo';
import {ReactComponent as LogoSVG} from './../../../assets/images/logo.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Logo href="/">
            <LogoSVG />
          </Logo>
      </Container>
  );
}

export default Footer;