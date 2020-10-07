import React from 'react';

import CheckBox from '../../shared/Checkbox';
import { List, Title, Array } from './Shopping.styles';

const ShoppingList = ({ title, products, onToggle }) => {
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
