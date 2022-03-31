import React from 'react';

import { Container, Title } from './styles';

interface Props {
    title?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode
}

const List = ({ title, children, style }:Props ) => {
  return (
      <Container style={style}>
          { title ?
           <>
            <Title>{title}</Title>
            {children}
           </>
            :
            children
          }
      </Container>
  );
}

export default List;