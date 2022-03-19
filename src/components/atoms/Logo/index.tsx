import { Container, Image } from './styles';

interface LogoProps {
  src: string,
  alt: string
}

const Logo = ({ src, alt }:LogoProps) => {
  return (
      <Container>
          <Image src={src} alt={alt} />
      </Container>
  );
}

export default Logo;