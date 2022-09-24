import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './ProductCounter.module.css';
import add from '../../../assets/images/icons/add.svg'
import subs from '../../../assets/images/icons/subs.svg';
import {productActions} from '../../../store/productSlice';

const ProductCounter = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.productState.totalQuantity);
    const addPiece = ()=> {
        dispatch(productActions.addPiece());
    }
    const removePiece = ()=> {
        dispatch(productActions.removePiece());
    }
  return (
        <div className={classes['counter-container']}>
            <div className={classes.counter}>
                <div className={classes.icon} onClick={addPiece}>
                    <img src={add} alt="plus"/>
                </div>
                <div className={classes.icon} onClick={removePiece}>
                    <img src={subs} alt="mins"/>
                </div>
            </div>
            <p className={classes.count}> {totalQuantity} </p>
        </div>
  );
};

export default ProductCounter;
