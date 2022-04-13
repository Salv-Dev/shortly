import React from 'react';

import { Container, Title } from './styles';

interface Props {
    title?: string,
    style?: React.CSSProperties,
    align?: "left" | "center" | "right",
    horizontal?: boolean,
    children?: React.ReactNode
}

const List = ({ title, children, style, align, horizontal }:Props ) => {
  return (
      <Container style={style} align={align || "left"} horizontal={false || horizontal}>
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