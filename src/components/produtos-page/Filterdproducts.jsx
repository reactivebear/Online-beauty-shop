import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col,Image,Pagination} from 'react-bootstrap';

export default class Filterdproducts extends Component {
  render() {
    var Produtos=[];

    for (var i=0; i<6; i++) {
        Produtos.push(
          <Col key={i} xs={12} sm={4} className="person-wrapper" >
            <div className="produtos">
              <div className="produtos-image">
                <Image alt="produtos-image" src="assets/images/no-image-land.jpg" />
              </div>
              <div className="produtos-detail">
                <div className="old-price">R$ 229</div>
                <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                <div className="single-price">12x R$ 17</div>
                <div className="detail-text">
                  <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                </div>
                <div className="product-reviews">
                  <span className="star-sm fill"></span>
                  <span className="star-sm fill"></span>
                  <span className="star-sm fill"></span>
                  <span className="star-sm fill"></span>
                  <span className="star-sm fill"></span>
                  <label>9551</label>
                </div>
              </div>
            </div>
          </Col>
        );
    }

    return (
      <section>
      <Col sm={12} className="person-wrapper">
        <Row className="show-grid">
          {Produtos}
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
}
