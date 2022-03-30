import React from 'react';
import Logo from '../../atoms/Logo';
import ButtonMenu from '../../atoms/ButtonMenu';
import { ReactComponent as LogoSVG } from './../../../assets/images/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo svg={<LogoSVG />} alt="Logo da Shortly na cor azul escuro" href="/" />
          <ButtonMenu />
      </Container>
  );
}

export default Header;