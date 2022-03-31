import Logo from '../../atoms/Logo';
import {ReactComponent as LogoSVG} from './../../../assets/images/logo.svg';
import List from '../../atoms/List';
import Link from '../../atoms/Link';

import { Container } from './styles';



const Footer: React.FC = () => {
  return (
      <Container>
          <Logo href="/" svg={<LogoSVG />} fill="white" />
          <List title="Recursos" style={{ color: 'white' }} align="center">
            <Link href="/" hoverColor="#2acfcf" ><li>Encurtador de links</li></Link>
            <Link href="/" hoverColor="#2acfcf" ><li>Links de marca</li></Link>
            <Link href="/" hoverColor="#2acfcf" ><li>Análise</li></Link>
          </List>
      </Container>
  );
}

export default Footer;