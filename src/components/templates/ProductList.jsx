import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

import { Api } from "../../api/api";

export default class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount () {
        this.productsID = setInterval (
            () => this.fetchFeaturedProducts(),
            1000
        );
    }

    //take all products featured and send that information to a list of products
    fetchFeaturedProducts () {
        Api.getProductsFeatured()
            .then(res => {
                this.setState({
                    products: res.data.object
                });
                // console.log(JSON.stringify(res.data.object, null, 4));
            });
    }

    componentDidUpdate () {
        clearInterval(this.productsID);
    }

    componentWillUnmount () {
        clearInterval(this.productsID);
    }

    render() {
        return (
            <section className="product-section">
                <Col sm={12} className="person-wrapper">
                    {/* <div className="section-heading text-left">
                        <h3>Produtos em <strong>destaque</strong></h3>
                    </div> */}
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