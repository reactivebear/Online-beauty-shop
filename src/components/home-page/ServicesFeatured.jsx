import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Api } from '../../api/api.js';
import { Row, Col } from 'react-bootstrap';

import ServiceList from '../templates/ServiceList';

export default class ServicesFeatured extends Component {

  constructor(props) {
    super(props);
    this.state = { services: [] };
  }

  render() {
    return (
      <section className="products-section services-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Serviços em <strong>destaque</strong></h3>
          </div>
          <Row className="show-grid">
            <ServiceList list={this.state.services}></ServiceList>
          </Row>
        </Col>
      </section>
    )
  }
}