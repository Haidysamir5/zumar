import React from 'react';
import classes from './ProductCode.module.css';

const ProductCode = props => {
  return (
    <p className={classes.code}>
        Product Code: {props.code}
    </p>
  );
};

export default ProductCode;
