import React from 'react';
import { Container } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    style?: React.CSSProperties,
    hoverColor?: string,
    activeColor?: string,
    color?: string,
    children: React.ReactNode
}

const Link = ({children, hoverColor, activeColor, target, color, ...props}:Props) => {
  return (
      <Container {...props} hoverColor={hoverColor} activeColor={activeColor} color={color}  target={target || '_self'}>
        {children}
      </Container>
  );
}

export default Link;