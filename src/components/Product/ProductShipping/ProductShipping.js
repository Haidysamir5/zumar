import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './ProductShipping.module.css';
import Card from '../../Ui/Card/Card';
import {productActions} from '../../../store/productSlice';

const ProductShipping = props => {
    const dispatch = useDispatch();
    const selectedShipping = useSelector(state => state.productState.selectedShipping);
    const shipping = props.shipping ;
    const {id, type, estimatedFrom , estimatedTo} = shipping ;
    const isSelected = id === selectedShipping;

    const selectShipping = ()=> {
        dispatch(productActions.selectShipping(shipping));
      }
    return (
        <Card isSelected={isSelected} onSelectCard={selectShipping} 
            className={classes['shipping-data']}>
            <span className={classes.type}>{type}</span>
            <span className={classes.estimated}>Estimated {estimatedFrom} - {estimatedTo}</span>
        </Card>
    );
};

export default ProductShipping;
