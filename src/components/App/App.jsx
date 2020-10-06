import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  const [lettuce, setLettuce] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <AppHeader />
          <AppContainer
            left={
              <Checkbox
                value={lettuce}
                title={'Batata'}
                onClick={() => setLettuce(!lettuce)}
              />
            }
            middle={<div>Sua lista de compras</div>}
            right={<div>Estatisticas</div>}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
