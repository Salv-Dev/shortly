import { Container, Image } from './styles';

interface LogoProps {
  src: string,
  alt?: string,
  href: string
}

const Logo = ({ src, alt, href }:LogoProps) => {
  return (
      <Container href={href}>
          <Image src={src} alt={alt} />
      </Container>
  );
}

export default Logo;