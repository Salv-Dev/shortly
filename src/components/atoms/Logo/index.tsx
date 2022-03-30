import React from 'react';
import { Container, Image } from './styles';

interface LogoProps {
  src?: string,
  alt?: string,
  href: string,
  fill?: string,
  svg?: React.SVGProps<SVGSVGElement>,
}

const Logo = ({ src, alt, href, svg, fill }:LogoProps) => {
  return (
      <Container href={href} fill={fill} >
          {svg ?
            svg
            :
            <Image src={src} alt={alt} />
          }
      </Container>
  );
}

export default Logo;