import React from 'react';
import classes from './ProductPhotosList.module.css';
import ProductPhoto from '../ProductPhoto/ProductPhoto'

const ProductPhotosList = props => {

  return (
    <div className={classes["photos-list"]}>
          {props.list.map((src,i) => (
            <ProductPhoto src={src} key={i}/>
          ))}
    </div>
  );
};

export default ProductPhotosList;
