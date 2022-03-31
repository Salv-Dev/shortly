import React from 'react';

import { Container, Title } from './styles';

interface Props {
    title?: string,
    style?: React.CSSProperties,
    align?: "left" | "center" | "right",
    children?: React.ReactNode
}

const List = ({ title, children, style, align }:Props ) => {
  return (
      <Container style={style} align={align || "left"}>
          { title ?
           <>
            <Title className="title">{title}</Title>
            {children}
           </>
            :
            children
          }
      </Container>
  );
}

export default List;