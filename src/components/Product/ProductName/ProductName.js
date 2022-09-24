import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ProductName.module.css';

const ProductName = () => {
  const name = useSelector(state => state.productState.product.name);

  return (
    <p className={classes.name}>
        {name}
    </p>
  );
};

export default ProductName;
