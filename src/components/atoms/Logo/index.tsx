import React from 'react';
import { Container, Image } from './styles';

interface LogoProps {
  src?: string,
  alt?: string,
  href: string,
  children?: React.ReactNode
}

const Logo = ({ src, alt, href, children }:LogoProps) => {
  return (
      <Container href={href}>
          {children ?
            children
            :
            <Image src={src} alt={alt} />
          }
      </Container>
  );
}

export default Logo;