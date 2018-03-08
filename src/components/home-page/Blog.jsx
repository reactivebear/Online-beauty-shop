import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Image} from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <section className="produtos-section">
        <Col sm={12} className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Blog</h3>
          </div>
          <Row className="show-grid">
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                    <Image alt="produtos-image" src="assets/images/b1.jpg" />
                </div>
                <div className="produtos-detail">
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/b2.jpg" />
                </div>
                <div className="produtos-detail">
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/b3.jpg" />
                </div>
                <div className="produtos-detail">
                  <div className="detail-text">
                    <p>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
              <div className="produtos">
                <div className="produtos-image">
                  <Image alt="produtos-image" src="assets/images/b4.jpg" />
                </div>
                <div className="produtos-detail">
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
