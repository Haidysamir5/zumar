import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Title from '../../Ui/Title/Title';
import formatNumber from '../../../utils/formatNumber'
import Button from '../../Ui/Button/Button';
import Row from '../../Ui/Row/Row';
import Col from '../../Ui/Col/Col';
import phoneSrc from '../../../assets/images/icons/phone.svg';
import clasess from './ProductOrder.module.css';
import {cartActions} from '../../../store/cartSlice';

const ProductOrder = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(state => state.productState.totalPrice);
    const totalQuantity = useSelector(state => state.productState.totalQuantity);
    const getPrice = () => {
        var formattedValue = formatNumber(totalPrice);
         return `$ ${formattedValue}` ; 
    }
    var placeOrder =()=>{
        dispatch(cartActions.placeOrder(totalQuantity));
    }
    return (
        <div>
            <Title title="Total" subTitle={getPrice()} color="green" size="sm"/>
            <Row gap="10">
                <Col>
                    <Button color="green" onClick={placeOrder}>
                        Place Order Now
                    </Button>
                </Col>
                <Col>
                    <Button color="dark-blue">
                        <img src={phoneSrc} className="ico"/>
                        Call us
                    </Button>
                </Col>
                <Col>
                   <span className={clasess.info}>We are 24/7 available</span>
                </Col>
            </Row>
        </div>
    );
};

export default ProductOrder;
