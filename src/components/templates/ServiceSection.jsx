import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import CatalogService from '../home-page/CatalogService.jsx';
import ServicesFeatured from '../home-page/ServicesFeatured';

export default class ServicetSection extends Component {

    render () {
        return (
            <section className="service-section">
                <Row className="catalog-service">
                    <CatalogService />
                </Row>
                <Row className="services-featured">
                    <ServicesFeatured />
                </Row>
            </section>
        );
    }
}