import React from 'react';
import { useSelector } from 'react-redux';
import Col from '../../Ui/Col/Col'
import Row from '../../Ui/Row/Row'
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductPricesList.module.css';

const ProductPricesList = () => {
    const pricesList = useSelector(state => state.productState.product.pricesList);

    return (
        <Row className={classes['price-container']}>
            {pricesList.map(price => {
              return (
                    <Col col="4" key={price.id}>
                        <ProductPrice price={price} key={price.id}/>
                    </Col>
                )
            })}
        </Row>
    );
};

export default ProductPricesList;
