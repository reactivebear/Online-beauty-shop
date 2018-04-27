import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

import ProductList from '../templates/ProductList';

export default class ProductsFeatured extends Component {

  constructor(props) {    
    super(props);
    this.state = { products :[] };
  }
  
  render() {
    return (
      <section className="products-section">
        <Col className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos em <strong>destaque</strong></h3>
          </div>
          <Row className="show-grid">
            <ProductList list={this.state.products}></ProductList>
          </Row>
        </Col>
      </section>
    )
  }
}