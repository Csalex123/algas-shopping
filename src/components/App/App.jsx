import React, { useState, useEffect } from 'react';

import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';
import productsMock from '../../mocks/products.json';
import { GlobalStyle, Wrapper, Container } from './App.styles';

const App = () => {
  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleToggle = (id) => {
    const newProducts = products.map((product) => {
      return product.id === id
        ? { ...product, checked: !product.checked }
        : product;
    });

    setProducts(newProducts);
  };

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts.map((product) => product.price);
    const newTotal = total.reduce((newPrice, item) => {
      return (newPrice += item);
    }, 0);

    setTotalPrice(newTotal);
  }, [selectedProducts]);

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

                <LineChart
                  color="#09f"
                  title="saudavel"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter((product) =>
                      product.tags.includes('healthy')
                    ).length
                  )}
                />
                <LineChart
                  color="red"
                  title="Não tão saudável"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter(
                      (product) =>
                        product.tags.includes('junk') ||
                        product.tags.includes('condiment')
                    ).length
                  )}
                />
                <LineChart
                  color=""
                  title="limpeza ou higiene"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter(
                      (product) =>
                        product.tags.includes('cleaning') ||
                        product.tags.includes('hygiene')
                    ).length
                  )}
                />
                <LineChart
                  color="black"
                  title="outros"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter((product) =>
                      product.tags.includes('others')
                    ).length
                  )}
                />

                <div style={{ marginTop: 12 }}>
                  <h2
                    style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}
                  >
                    previsão de gastos:
                  </h2>
                  <div style={{ fontSize: 24 }}>
                    {totalPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </div>
                </div>
              </div>
            }
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
