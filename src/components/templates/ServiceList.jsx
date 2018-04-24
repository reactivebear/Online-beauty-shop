import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

import { Api } from "../../api/api";

export default class ServiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                // { id: 1, title: "Hairtylist & Makeup", price: 200, image_url: "assets/images/p7.jpg" },
                // { id: 2, title: "Barber", price: 100, image_url: "assets/images/p9.jpg" }
            ]
        }
    }

    componentDidMount () {
        this.serviceID = setInterval (
            () => this.fetchFeaturedServices(),
            1000
            //60000
        );
    }

    //take all services featured and send that information to a list of services
    fetchFeaturedServices () {
        Api.getServicesFeatured()
            .then(res => {
                this.setState({
                    services: res.data.object
                });
                // console.log(JSON.stringify(res.data.object, null, 4));
            });
    }

    componentDidUpdate () {
        clearInterval(this.serviceID);
    }

    componentWillUnmount () {
        clearInterval(this.serviceID);
    }

    render() {
        return (
            <section className="product-section service-section">
                <Col sm={12} className="person-wrapper">
                    {/* <div className="section-heading text-left">
                        <h3>Produtos em <strong>destaque</strong></h3>
                    </div> */}
                    <Row className="show-grid catalog-list">
                        <Col xs={6} sm={3} className="person-wrapper">
                            <ServiceCard
                                services={this.state.services}>
                            </ServiceCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        );
    }
}