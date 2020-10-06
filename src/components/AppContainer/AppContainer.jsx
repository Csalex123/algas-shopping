import React from 'react';
import { Main } from './AppContainer.styles';

const AppContainer = ({ left, middle, right }) => {
  return (
    <Main>
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </Main>
  );
};

export default AppContainer;
