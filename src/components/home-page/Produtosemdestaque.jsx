import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Pagination} from 'react-bootstrap';

import ProductList from '../templates/ProductList';

const URL = 'http://visualtotal.com.br';

export default class Produtosemdestaque extends Component {

  constructor(props) {    
    super(props);
    this.state = { description: '', products_list :[] };

    this.refresh();
  }

  //API busca produtos no banco 
  refresh(description = '') {
    const search = description ? `&product_text__regex=/${description}/` : '';
    axios.post(`${URL}?sort=-createdAt${search}`)
      //.then(resp =>  console.log(resp.data));
      .then(resp => this.setState({ ...this.state, description, list: resp.data }));
  }

  render() {
    return (
      <section className="produtos-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos em destaque</h3>
          </div>
          <Row className="show-grid">
            <ProductList list={this.state.products_list}></ProductList>
          </Row>
        </Col>
      </section>
    )
  }
}


  /*
  componentDidMount () {
    let data = {featured_only: true};
    axios.post('http://visualtotal.com.br/api/products', data, {
      headers: { apikey: '5612edff-bfae-4919-83ad-e8064b447a49', 'Content-Type': 'application/json' }
    })
    .then(res => {
      //const products_list = res.data;
      console.log(res.data);
    var products_arr = res.data.object.map(obj=>obj);
      const products_list = products_arr.map(obj=> <Col xs={12} sm={3} className="person-wrapper" key={obj.id}>
              <div className="produtos">
                <div className="produtos-image">
                    <Image alt="produtos-image" src= {obj.image_url} />
                </div>
                <div className="produtos-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>{obj.name}</p>
                  </div>
                </div>
              </div>
            </Col>);
      this.setState({products_list});
    });
  }

  render() {
    return (
      <section className="produtos-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos em destaque</h3>
          </div>
          <Row className="show-grid">
          {this.state.products_list}
          </Row>
          <Row className="text-center">
            <Pagination>
              <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Row>
        </Col>
      </section>
    )
  }
} */