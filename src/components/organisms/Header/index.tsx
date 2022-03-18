import React from 'react';
import Logo from '../../atoms/Logo';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo />
      </Container>
  );
}

export default Header;