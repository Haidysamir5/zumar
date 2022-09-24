import React from 'react';
import { useSelector } from 'react-redux';
import ProductActivePhoto from '../ProductActivePhoto/ProductActivePhoto'
import ProductPhotosList from '../ProductPhotosList/ProductPhotosList'
import classes from './ProductSlider.module.css';

const ProductSlider = () => {
  const photos = useSelector(state => state.productState.product.photos);

  return (
    <div className ={classes['slider-container']}>
       <ProductActivePhoto src={photos.active}/>
       <ProductPhotosList list={photos.list}/>
    </div>
  );
};

export default ProductSlider;
