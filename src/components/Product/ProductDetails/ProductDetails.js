import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ProductDetails.module.css';
import ProductCode from '../ProductCode/ProductCode';
import ProductReview from '../ProductReview/ProductReview';
import Row from '../../Ui/Row/Row';

const ProductDetails = () => {
  const details = useSelector(state => state.productState.product.details);

  return (
      <Row className={classes['details-box']}>
          <ProductCode code={details.code}/>
          <ProductReview review={details.review}/>
      </Row>
  );
};

export default ProductDetails;
