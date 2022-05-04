import React from 'react';
import Logo from '../../atoms/Logo';
import ButtonMenu from '../../atoms/ButtonMenu';
import MobileMenu from '../../molecules/MobileMenu';
import Input from '../../atoms/Input';
import List from '../../atoms/List';
import { ReactComponent as LogoSVG } from './../../../assets/images/logo.svg';

import { Container, Label, WrapperDesktopMenu, Login } from './styles';
import Link from '../../atoms/Link';
import Button from '../../atoms/Button';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo svg={<LogoSVG />} alt="Logo da Shortly na cor azul escuro" href="/" />
          <WrapperDesktopMenu>
            <List horizontal  align="center" style={{ gap: '20px'}}>
              <li><Link href="/">Produtos</Link></li>
              <li><Link href="/">Preços</Link></li>
              <li><Link href="/">Recursos</Link></li>
            </List>
            <Login>
              <List horizontal align="center">
                <li><Link href="/">Login</Link></li>
              </List>
              <Button variant="rounded" size="sm">Criar Conta</Button>
            </Login>
          </WrapperDesktopMenu>
          <Label htmlFor="menu">
            <ButtonMenu />
          </Label>
          <Input type="checkbox" id="menu"/>
          <MobileMenu />
      </Container>
  );
}

export default Header;