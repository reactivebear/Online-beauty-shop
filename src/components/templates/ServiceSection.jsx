import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import CatalogService from '../home-page/CatalogService.jsx';
import ServicesFeatured from '../home-page/ServicesFeatured';

export default class ProductSection extends Component {

    render () {
        return (
            <section className="service-section">
                <Row className="catalog catalog-service">
                    <CatalogService />
                </Row>
                <Row className="services-featured">
                    <ServicesFeatured />
                </Row>
            </section>
        );
    }
}