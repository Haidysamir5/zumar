import React from 'react';
import classes from './ProductPrice.module.css';
import formatNumber from '../../../utils/formatNumber'

const ProductPrice = props => {
    const type = props.price.type;
    const value = props.price.value;
    const currency = props.price.currency;
    const drawPrice = () => {
       var formattedValue = formatNumber(value);
        return (
            <p className={classes.value}>  
                {`${currency} ${formattedValue}.00 `}
            </p>
        )
    }
    
    return (
        <div className={classes['price-details']}>
            <p className={classes.type}>{type} </p>
            {drawPrice()}
        </div>
    );
};

export default ProductPrice;
