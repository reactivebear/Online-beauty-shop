import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Image, Pagination} from 'react-bootstrap';

export default class Produtosemdestaque extends Component {
  render() {
    return (
      <section className="produtos-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Produtos em destaque</h3>
          </div>
          <Row className="show-grid">
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                    <Image alt="produtos-image" src="assets/images/p5.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p6.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p7.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p8.jpg" />
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
          <Row className="show-grid">
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                    <Image alt="produtos-image" src="assets/images/p9.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p10.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p11.jpg" />
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
                  <Image alt="produtos-image" src="assets/images/p12.jpg" />
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
