import React, { Component } from 'react';
import { Button, Col, Panel, Row } from 'react-bootstrap';

export default class FilterButton extends Component {
    render() {
        return (
            <section className="filter-button-section">
                <Col sm={12} className="person-wrapper">
                    <Row className="filter-button-row">
                        <div className="filter-button-holder">
                            <input type="button" className="filter-button-product" onClick="alert('Eu funciono!')" value="Produtos" />
                        </div>
                        <div className="filter-button-holder">
                            <input type="button" className="filter-button-service" onClick="alert('Eu funciono!')" value="Serviços" />
                        </div>
                    </Row>
                </Col>
            </section>
        )
    }
}