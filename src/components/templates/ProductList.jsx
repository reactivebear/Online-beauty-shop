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
            products: [
                { id: 1, name: "Oil", image_url: "assets/images/p5.jpg" },
                { id: 2, name: "Shampoo", image_url: "assets/images/p10.jpg" },
                { id: 3, name: "Perfume", image_url: "assets/images/p9.jpg" },
                { id: 4, name: "Oil", image_url: "assets/images/p8.jpg" },
                { id: 5, name: "Shampoo", image_url: "assets/images/p11.jpg" },
                { id: 6, name: "Perfume", image_url: "assets/images/p12.jpg" }
            ]
        }
    }

    componentDidUpdate () {
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