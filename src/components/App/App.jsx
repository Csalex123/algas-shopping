import React from 'react';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <AppHeader />
          <AppContainer
            left={
              <div style={{ backgroundColor: 'red' }}>Produtos disponíveis</div>
            }
            middle={
              <div style={{ backgroundColor: 'green' }}>
                Sua lista de compras
              </div>
            }
            right={<div style={{ backgroundColor: 'blue' }}>Estatisticas</div>}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
