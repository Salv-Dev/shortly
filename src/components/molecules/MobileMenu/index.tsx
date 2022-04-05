import React from 'react';
import List from '../../atoms/List';
import Link from '../../atoms/Link';
import Button from '../../atoms/Button';

import { Container, Nav, Hr, ButtonGroup } from './styles';

const MobileMenu: React.FC = () => {
  return (
          <Nav>
            <List style={{ color: 'white', gap: '40px' }} align="center">
                <li>
                    <Link 
                        href="/"
                        hoverColor="#2acfcf"
                        color="white"
                        style={{ fontSize: '16px', fontWeight: 'bold'}}
                    >Produtos</Link>
                </li>
                <li>
                    <Link 
                        href="/"
                        hoverColor="#2acfcf"
                        color="white"
                        style={{ fontSize: '16px', fontWeight: 'bold'}}
                    >Preços</Link>
                </li>
                <li>
                    <Link 
                        href="/"
                        hoverColor="#2acfcf"
                        color="white"
                        style={{ fontSize: '16px', fontWeight: 'bold'}}
                    >Recursos</Link>
                </li>
            </List>
            <Hr style={{ backgroundColor: '#4c4263'}}/>
            <ButtonGroup>
                <Button variant="rounded-ghost" style={{ padding: '10px 0'}}>Login</Button>
                <Button variant="rounded" style={{ padding: '10px 0'}}>Crie sua Conta</Button>
            </ButtonGroup>
          </Nav>
  );
}

export default MobileMenu;