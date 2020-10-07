import React, { useState } from 'react';

import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';
import productsMock from '../../mocks/products.json';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  const [products, setProducts] = useState(productsMock.products);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <AppHeader />
          <AppContainer
            left={
              <ShoppingList 
                title="Produtos disponíveis" 
                products={products}
              />
            }
            middle={
            <ShoppingList 
              title="Sua lista de compras" 
              products={products}
            />
          }
            right={
              <div>
                <p>Estatisticas</p>
                <LineChart 
                  color="#09f" 
                  title="saudavel" 
                  percentage={10} 
                />
                <LineChart
                  color="red"
                  title="Não saudável"
                  percentage={10}
                />
                <LineChart 
                  color="" 
                  title="saudavel" 
                  percentage={10} 
                />
              </div>
            }
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
