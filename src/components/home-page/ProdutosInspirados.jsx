import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Image} from 'react-bootstrap';

export default class ProdutosInspirados extends Component {
  render() {
    return (
      <section className="produtos-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos inspirados na sua navegação</h3>
          </div>
          <Row className="show-grid">
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                    <Image alt="produtos-image" src="assets/images/p1.jpg" />
                </div>
                <div className="produtos-detail">
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
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/p2.jpg" />
                </div>
                <div className="produtos-detail">
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
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/p3.jpg" />
                </div>
                <div className="produtos-detail">
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
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/p4.jpg" />
                </div>
                <div className="produtos-detail">
                  <div className="old-price">R$ 229</div>
                  <div className="now-price">R$ 179 <span className="discount">22% OFF</span></div>
                  <div className="single-price">12x R$ 17</div>
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </section>
    )
  }
}
