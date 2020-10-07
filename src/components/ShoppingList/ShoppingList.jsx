import React from 'react';
import { List, Title, Array } from './Shopping.styles';
import CheckBox from '../../shared/Checkbox';

const ShoppingList = ({ title, products }) => {
  return (
    <List>
      <Title>
        {title}:
        <Array>
          {products.map( product => (
            <CheckBox value={product.checked} title={product.name} />
          ))}
        </Array>
      </Title>
    </List>
  );
};

export default ShoppingList;
