import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

let product = '';

export default props => {

    const render = () => {

        const object = props.object || [];
        return object.map(product => (
                <ProductCard product_title={product.name}></ProductCard>
        ))
    }

    return (
        <Col key={product.id} xs={16} sm={4} className="person-wrapper">
            { render() }
        </Col>
    )
}