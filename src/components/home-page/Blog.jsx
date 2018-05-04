import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Image,Pagination} from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <section className="blog-section">
        <Col className="person-wrapper">
          <div className="section-heading text-left">
            <h3>Blog</h3>
          </div>
          <Row className="show-grid">
            <Col className="person-wrapper">
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
            <Col className="person-wrapper">
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
            <Col className="person-wrapper">
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
            <Col className="person-wrapper">
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
