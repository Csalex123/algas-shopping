import React from 'react';
import { WrapperCheckbox, Indicator } from './Checkbox.styles';

const Checkbox = ({ value, title, onClick }) => {
  return (
    <WrapperCheckbox onClick={onClick}>
      <Indicator value={value} />
      {title}
    </WrapperCheckbox>
  );
};

export default Checkbox;
