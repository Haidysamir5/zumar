import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './ProductColor.module.css';
import Card from '../../Ui/Card/Card';
import {productActions} from '../../../store/productSlice';

const ProductColor = props => {
    const dispatch = useDispatch();
    const selectedColor = useSelector(state => state.productState.selectedColor);
    const id = props.color.id ;
    const name = props.color.name;
    const icon = props.color.icon;
    const isSelected = id === selectedColor;

    const selectColor = ()=> {
        dispatch(productActions.selectColor(id));
      }
    return (
        <Card isSelected={isSelected} onSelectCard={selectColor}>
            <img className={classes.icon} src={icon} alt={icon}/>
            <span className={classes.name}>{name}</span>
        </Card>
    );
};

export default ProductColor;
