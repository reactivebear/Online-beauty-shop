import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class FilterButton extends Component {
    render() {
        return (
            <section className="filter-button-section">
                <Col sm={12} className="person-wrapper">
                    <Row className="filter-button-row">
                        <div className="filter-button-holder btn-green">
                            <button type="button" className="filter-button-product  btn-sm btn" onClick="alert('Eu funciono!')">Produtos</button>
                        </div>
                        <div className="filter-button-holder btn-white">
                            <button type="button" className="filter-button-service btn-sm btn" onClick="alert('Eu funciono!')">Serviços</button>
                        </div>
                    </Row>
                </Col>
            </section>
        )
    }
}