import { useState, useEffect } from 'react';
import Logo from '../../atoms/Logo';
import {ReactComponent as LogoSVG} from './../../../assets/images/logo.svg';
import List from '../../atoms/List';
import Link from '../../atoms/Link';
import Icon from '../../atoms/Icon';

import { Container, WrapperFooter, WrapperList, SocialMedia } from './styles';



const Footer: React.FC = () => {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 1000px)").matches);
  const alignList = matches ? "left" : "center";

  useEffect(() => {
    window.matchMedia("(min-width: 1000px)")
    .addEventListener("change", e => {
      setMatches(e.matches);
    })
  }, []);

  return (
      <Container>
        <WrapperFooter>
          <Logo href="/" svg={<LogoSVG />} fill="white" />
          <WrapperList>
            <List title="Produtos" style={{ color: 'white' }} align={alignList}>
              <Link href="/" hoverColor="#2acfcf" ><li>Encurtador de Links</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Links de Marca</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Análise</li></Link>
            </List>
            <List title="Recursos" style={{ color: 'white' }} align={alignList}>
              <Link href="/" hoverColor="#2acfcf" ><li>Blog</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Desenvolvedores</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Suporte</li></Link>
            </List>
            <List title="Companhia" style={{ color: 'white' }} align={alignList}>
              <Link href="/" hoverColor="#2acfcf" ><li>Sobre</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Nosso Time</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Carreira</li></Link>
              <Link href="/" hoverColor="#2acfcf" ><li>Contato</li></Link>
            </List>
          </WrapperList>
          <SocialMedia>
            <Link  hoverColor="#2acfcf">
              <Icon name="facebook" size={24}/>
            </Link>
            <Link  hoverColor="#2acfcf">
              <Icon name="twitter" size={24}/>
            </Link>
            <Link  hoverColor="#2acfcf">
              <Icon name="pinterest" size={24}/>
            </Link>
            <Link  hoverColor="#2acfcf">
              <Icon name="instagram" size={24}/>
            </Link>
          </SocialMedia>

        </WrapperFooter>
      </Container>
  );
}

export default Footer;