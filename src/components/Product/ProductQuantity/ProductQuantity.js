import React from 'react';
import { useSelector} from 'react-redux';
import Title from '../../Ui/Title/Title';
import ProductCounter from '../ProductCounter/ProductCounter';
import formatNumber from '../../../utils/formatNumber'

const ProductQuantity = () => {
    const quantityPrice = useSelector(state => state.productState.quantityPrice);
    const getPrice = () => {
    var formattedValue = formatNumber(quantityPrice);
         return `$ ${formattedValue}` ; 
     }
    return (
        <div>
            <Title title="Quantity" subTitle={getPrice()} color="red" size="sm"/>
            <ProductCounter/>
        </div>
    );
};

export default ProductQuantity;
