import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import CatalogProduct from '../home-page/CatalogProduct.jsx';
import ProductsFeatured from '../home-page/ProductsFeatured.jsx';

export default class ProductSection extends Component {

    render () {
        return (
            <section className="product-section">
                <Row className="catalog-product">
                    <CatalogProduct />
                </Row>
                <Row className="products-featured">
                    <ProductsFeatured />
                </Row>
            </section>
        );
    }
}