import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

import { StorageKeys } from "../../utils/storagekeys.js";
import { Api } from "../../api/api";

export default class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "",
            message: "",
            products: []
        }
    }

    componentWillMount() {
        console.log(localStorage.getItem(StorageKeys.APIKEY));

        //take all products featured and send that information to a list of products
        Api.getProductsFeatured()
            .then(res => {
                this.setState({
                    products: res.object
                });
            });
        console.log(this.state.products);
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