import React from 'react';
import { Container, WrapperTitle, Title, Desc } from './styles';

interface Props {
    title?: string,
    desc?: string,
    children?: React.ReactNode
}

const Card = ({ children, title, desc }: Props) => {
  return (
      <Container style={{ paddingTop: `${children && '0px'}` }}>
          {children}
          <WrapperTitle>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
          </WrapperTitle>
      </Container>
  );
}

export default Card;