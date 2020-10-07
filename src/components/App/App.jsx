import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle, Wrapper, Container } from './App.styles';

import LineChart from '../../shared/LineChart/LineChart';

import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';

import extractPercentage from '../../utils/extractPercentage';

import {
  // selectAllProducts,
  selectSelectedProducts,
  selectSelectedProductTotalPrice,
} from '../../store/Products/Products.selectors';
import { toggleProduct } from '../../store/Products/Products.actions';

const App = () => {
  const dispatch = useDispatch();
  // const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectSelectedProducts);
  const totalPrice = useSelector(selectSelectedProductTotalPrice);

  const handleToggle = (id) => {
    dispatch(toggleProduct(id));
  };

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
                onToggle={handleToggle}
              />
            }
            middle={
              selectedProducts && (
                <ShoppingList
                  title="Sua lista de compras"
                  selected
                  onToggle={handleToggle}
                />
              )
            }
            right={
              <div>
                <p>Estatísticas</p>

                <LineChart
                  color="#62CBC6"
                  title="saudavel"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter((product) =>
                      product.tags.includes('healthy')
                    ).length
                  )}
                />
                <LineChart
                  color="#00858C"
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
                  color="#006073"
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
                  color="#004D61"
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
