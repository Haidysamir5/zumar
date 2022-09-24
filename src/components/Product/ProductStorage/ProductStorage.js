import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './ProductStorage.module.css';
import Card from '../../Ui/Card/Card';
import {productActions} from '../../../store/productSlice';

const ProductStorage = props => {
    const dispatch = useDispatch();
    const selectedStorage = useSelector(state => state.productState.selectedStorage);
    const id = props.storage.id ;
    const number = props.storage.number;
    const isSelected = id === selectedStorage;

    const selectStorage = ()=> {
        var storage = props.storage ;
        dispatch(productActions.selectStorage(storage));
      }
    return (
        <Card isSelected={isSelected} onSelectCard={selectStorage}>
            <span className={classes.number}>{number}</span>
            <span className={classes.unit}>GB</span>
        </Card>
    );
};

export default ProductStorage;
