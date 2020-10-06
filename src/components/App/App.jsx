import React, { useState, useEffect } from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';
import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  const [lettuce, setLettuce] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent !== 100) {
      setTimeout(() => {
        setPercent(percent + 1);
      }, 100);
    }
  }, [percent]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <AppHeader />
          <AppContainer
            left={
              <div>
                <p>Produtos disponíveis: </p>
                <Checkbox
                  value={lettuce}
                  title={'Batata'}
                  onClick={() => setLettuce(!lettuce)}
                />
              </div>
            }
            middle={
              <div>
                <p>Sua lista de compras</p>
              </div>
            }
            right={
              <div>
                <p>Estatisticas</p>
                <LineChart color="#09f" title="saudavel" percentage={percent} />
                <LineChart
                  color="red"
                  title="Não saudável"
                  percentage={percent}
                />
                <LineChart color="" title="saudavel" percentage={percent} />
              </div>
            }
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
