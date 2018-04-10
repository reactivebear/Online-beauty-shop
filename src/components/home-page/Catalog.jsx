import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import CatalogCard from "../templates/CatalogCard";

export default class Catalog extends Component {
    render () {
        return(
            <section className="catalog-section">
                <Col sm={12} className="person-wrapper">
                    <div className="section-heading text-left">
                        <h3>Catálogo de Produtos</h3>
                    </div>
                    <Row className="show-grid catalog-list">
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                        <Col xs={6} sm={3} className="person-wrapper">
                            <CatalogCard></CatalogCard>
                        </Col>
                    </Row>
                </Col>
            </section>
        )
    }
}