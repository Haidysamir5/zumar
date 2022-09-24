import React from 'react';
import { useSelector } from 'react-redux';
import Col from '../../Ui/Col/Col'
import Row from '../../Ui/Row/Row'
import Title from '../../Ui/Title/Title'
import ProductColor from '../ProductColor/ProductColor';

const ProductColorsList = () => {
    const colorsList = useSelector(state => state.productState.product.colorsList);
    
    return (
        <div>
            <Title title="Avaliable Color"/>
            <Row>
                {colorsList.map(color => {
                return (
                        <Col col="4" key={color.id}>
                            <ProductColor color={color} key={color.id}/>
                        </Col>
                    )
                })}
             </Row>
        </div>
    );
};

export default ProductColorsList;
