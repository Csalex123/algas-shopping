import React from 'react';

import CheckBox from '../../shared/Checkbox';
import { List, Title, Array } from './Shopping.styles';
import {
  selectAllProducts,
  selectSelectedProducts,
} from '../../store/Products/Products.selectors';
import { useSelector } from 'react-redux';

const ShoppingList = ({ title, selected, onToggle }) => {
  const products = useSelector(
    selected ? selectSelectedProducts : selectAllProducts
  );

  return (
    <List>
      <Title>
        {title}:
        <Array>
          {products.map((product) => (
            <CheckBox
              key={product.id}
              value={product.checked}
              title={product.name}
              onClick={() => onToggle(product.id)}
            />
          ))}
        </Array>
      </Title>
    </List>
  );
};

export default ShoppingList;
