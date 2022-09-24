import React from 'react';
import Container from '../../Ui/Container/Container';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductSlider from '../ProductSlider/ProductSlider';
import ProductPricesList from '../ProductPricesList/ProductPricesList';
import ProductColorsList from '../ProductColorsList/ProductColorsList';
import ProductName from '../ProductName/ProductName';
import Col from '../../Ui/Col/Col'
import classes from './ProductContainer.module.css'
import ProductStorageList from '../ProductStorageList/ProductStorageList';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import ProductShippingList from '../ProductShippingList/ProductShippingList';
import ProductOrder from '../ProductOrder/ProductOrder';
import Row from '../../Ui/Row/Row';
const ProductContainer = () => {

  return (
    <Container className={classes['product-container']}>
      <Col col="6" >
        <ProductSlider/>
      </Col> 
      <Col col="6">
        <Row>
          <Col col="12" className={classes['details-container']}>
            <ProductName/>
            <ProductDetails/>
            <ProductPricesList/>
            <ProductColorsList/>
            <ProductStorageList/>
          </Col>
          <Col col="12">
            <ProductQuantity/>
            <ProductShippingList/>
            <ProductOrder/>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ProductContainer;
