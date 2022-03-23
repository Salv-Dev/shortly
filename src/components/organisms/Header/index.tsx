import React from 'react';
import Logo from '../../atoms/Logo';
import ButtonMenu from '../../atoms/ButtonMenu';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo src="/images/logo.svg" alt="Logo da Shortly na cor azul escuro" href="/" />
          <ButtonMenu />
      </Container>
  );
}

export default Header;