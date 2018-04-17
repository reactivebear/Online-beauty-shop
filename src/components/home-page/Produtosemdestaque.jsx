import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Api} from '../../api/api.js';
import { Row, Col} from 'react-bootstrap';

import ProductList from '../templates/ProductList';

export default class Produtosemdestaque extends Component {

  constructor(props) {    
    super(props);
    this.state = { products :[] };

    this.refresh();
  }

  //TODO: componentDidMount(){}?


  //API busca produtos no banco 
  refresh() {
    Api.axios.post(`/api/products`, {
      headers: {apikey: '9fa8d563-d239-4754-87ad-61d6f6a5eead'},
      data: {
        featured_only: true
      }
    })
      .then(resp =>  console.log(resp.data));
      // .then(resp => this.setState({ ...this.state, description, list: resp.data }));
  }

  render() {
    return (
      <section className="products-section">
        <Col sm={12} className="person-wrapper">
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