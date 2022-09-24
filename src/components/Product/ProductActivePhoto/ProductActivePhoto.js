import React from 'react';
import classes from './ProductActivePhoto.module.css'
const ProductActivePhoto = props => {
  return (
    <div className={classes['active-photo']}>
        <img src={props.src} alt="active"/> 
    </div>
  );
};

export default ProductActivePhoto;
