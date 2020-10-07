import React, { useState, useEffect } from 'react';

import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';
import productsMock from '../../mocks/products.json';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState();

  const handleToggle = (id) => {
    const newProducts = products.map((product) => {
      return product.id === id
        ? { ...product, checked: !product.checked }
        : product;
    });

    setProducts(newProducts);
  };

  useEffect(() => {
    const newSelectedProducts = products.filter(product => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

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
                onToggle={handleToggle}
              />
            }
            middle={
              selectedProducts && (
                <ShoppingList
                  title="Sua lista de compras"
                  products={selectedProducts}
                  onToggle={handleToggle}
                />
              )
            }
            right={
              <div>
                <p>Estatísticas</p>
                <LineChart color="#09f" title="saudavel" percentage={47} />
                <LineChart color="red" title="Não saudável" percentage={60} />
                <LineChart color="" title="saudável" percentage={80} />
              </div>
            }
          />
        </Container>
      </Wrapper>
    </>
  );
};


export default App;
