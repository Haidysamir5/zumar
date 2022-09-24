import React from 'react';
import { useSelector} from 'react-redux';
import Title from '../../Ui/Title/Title';
import Row from '../../Ui/Row/Row';
import Col from '../../Ui/Col/Col';
import ProductShipping from '../ProductShipping/ProductShipping';
import formatNumber from '../../../utils/formatNumber'
import classes from './ProductShippingList.module.css';

const ProductShippingList = () => {
    const shippingPrice = useSelector(state => state.productState.shippingPrice);
    const shippingList = useSelector(state => state.productState.product.shippingList);
    const getPrice = () => {
        var formattedValue = formatNumber(shippingPrice);
         return `$ ${formattedValue}` ; 
     }
    return (
        <div>
            <Title title="Shipping" subTitle={getPrice()} color="red" size="sm"/>
            <Row width="m-80">
                {shippingList.map(shipping => {
                return (
                        <Col col="6" key={shipping.id}>
                            <ProductShipping shipping={shipping} key={shipping.id}/>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
};

export default ProductShippingList;
