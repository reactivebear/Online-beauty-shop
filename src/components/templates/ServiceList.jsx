import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

import { Api } from "../../api/api";

export default class ServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                { id: 1, name: "Hairtylist & Makeup", price: 200, image_url: "assets/images/p7.jpg" },
                { id: 2, name: "Barber", price: 100, image_url: "assets/images/p9.jpg" }
            ]
        }
    }

    componentDidMount () {
        this.serviceID = setInterval (
            () => this.fetchFeaturedServices(),
            60000
        );
    }

    //take all services featured and send that information to a list of services
    fetchFeaturedServices () {
        Api.getServicesFeatured()
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
                            <ServiceCard
                                services={this.state.servides}>
                            </ServiceCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}