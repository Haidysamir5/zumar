import React from 'react';
import { useSelector } from 'react-redux';
import Col from '../../Ui/Col/Col'
import Row from '../../Ui/Row/Row'
import Title from '../../Ui/Title/Title'
import ProductStorage from '../ProductStorage/ProductStorage';

const ProductStorageList = () => {
    const storageList = useSelector(state => state.productState.product.storageList);
    
    return (
        <div>
            <Title title="Storage Capacity"/>
            <Row>
                {storageList.map(storage => {
                return (
                        <Col col="4" key={storage.id}>
                            <ProductStorage storage={storage} key={storage.id}/>
                        </Col>
                    )
                })}
             </Row>
        </div>
    );
};

export default ProductStorageList;
