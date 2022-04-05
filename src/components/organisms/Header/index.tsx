import React from 'react';
import Logo from '../../atoms/Logo';
import ButtonMenu from '../../atoms/ButtonMenu';
import MobileMenu from '../../molecules/MobileMenu';
import Input from '../../atoms/Input';
import { ReactComponent as LogoSVG } from './../../../assets/images/logo.svg';

import { Container, Label } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo svg={<LogoSVG />} alt="Logo da Shortly na cor azul escuro" href="/" />
          <Label htmlFor="menu">
            <ButtonMenu />
          </Label>
          <Input type="checkbox" id="menu"/>
          <MobileMenu />
      </Container>
  );
}

export default Header;