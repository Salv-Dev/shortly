import React from 'react';
import { Container } from './styles';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    style?: React.CSSProperties,
    hoverColor?: string,
    activeColor?: string,
    children: React.ReactNode
}

const Link = ({children, hoverColor, activeColor, target, ...props}:Props) => {
  return (
      <Container {...props} hoverColor={hoverColor} activeColor={activeColor} target={target || '_blank'}>
        {children}
      </Container>
  );
}

export default Link;