import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

export default class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { productId: 1, productTitle: "Máscara Senscience Inner Restore Intensif 500ml - Único", productImg: "assets/images/p1.jpg" },
                { productId: 2, productTitle: "Máscara Senscience Inner Restore Intensif 750ml - Único", productImg: "assets/images/p2.jpg" },
                { productId: 3, productTitle: "Máscara Senscience Inner Restore Intensif 1l - Único", productImg: "assets/images/p3.jpg" },
                { productId: 4, productTitle: "Máscara Senscience Inner Restore Intensif 2l - Único", productImg: "assets/images/p4.jpg" },
                { productId: 5, productTitle: "Máscara Senscience Inner Restore Intensif 5l - Único", productImg: "assets/images/p5.jpg" },
                { productId: 6, productTitle: "Máscara Senscience Inner Restore Intensif 10l - Único", productImg: "assets/images/p6.jpg" }
            ]
        }
    }

    render() {
        return (
            <section className="product-section">
                <Col sm={12} className="person-wrapper">
                    <div className="section-heading text-left">
                        <h3>Produtos em <strong>destaque</strong></h3>
                    </div>
                    <Row className="show-grid catalog-list">
                        <Col xs={6} sm={3} className="person-wrapper">
                            <ProductCard
                                products={this.state.products}>
                            </ProductCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}