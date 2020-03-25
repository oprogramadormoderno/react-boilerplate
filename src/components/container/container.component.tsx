import React from 'react';

import { IProps } from './container.type';
import { Container, ContainerFluid } from './container.style';

const ContainerComponent: React.FC<IProps> = props => {
  const { children, type } = props;

  if (type === 'fluid') {
    return <ContainerFluid>{children}</ContainerFluid>;
  }

  return <Container className={type}>{children}</Container>;
};

export default ContainerComponent;
