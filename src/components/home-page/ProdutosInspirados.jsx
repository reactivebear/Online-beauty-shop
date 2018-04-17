import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

import ProductList from '../templates/ProductList';

export default class ProdutosInspirados extends Component {
  render() {
    return (
      <section className="products-section">
        <Col sm={12} md={6}  className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos em <strong>inspirados</strong></h3>
          </div>
          <Row className="show-grid">
            <ProductList></ProductList>
          </Row>
          {/* <br/>
          <Row>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="products">
                <div className="products-image">
                    <Image alt="products-image" src="assets/images/p1.jpg" />
                </div>
                <div className="products-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="products">
                <div className="products-image">
                  <Image alt="products-image" src="assets/images/p2.jpg" />
                </div>
                <div className="products-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="products">
                <div className="products-image">
                  <Image alt="products-image" src="assets/images/p3.jpg" />
                </div>
                <div className="products-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="products">
                <div className="products-image">
                  <Image alt="products-image" src="assets/images/p4.jpg" />
                </div>
                <div className="products-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
        </Col>
      </section>
    )
  }
}
