import React from 'react';
import { MainWrapper } from './Main.styles';

const Main = ({ children, isFull }) => {

  return (
    <MainWrapper isFull={isFull}>
      {children}
    </MainWrapper>
  );
};

export default Main;
