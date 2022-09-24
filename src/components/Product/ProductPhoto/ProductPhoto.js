import React from 'react';
import classes from './ProductPhoto.module.css';

const ProductPhoto = props => {

  return (
      <div className={classes.photo}>
            <img src={props.src} alt={props.src} />
      </div>
  );
};

export default ProductPhoto;
