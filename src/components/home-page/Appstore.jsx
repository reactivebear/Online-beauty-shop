import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col,Image} from 'react-bootstrap';

export default class Appstore extends Component {
  render() {
    return (
      <section className="appstore-section">
        <Col className="col-wrapper">
          <Row className="show-grid">
            <Col className="appstore-wrapper person-wrapper ">
              <div className="content-sec mobile-app">
                <h2>Baixe nosso app</h2>
                <p>Compre e venda de qualquer lugar<br/>
                  Acompanhe seus pedidos<br/>
                  Receba promoções exclusivas<br/>
                </p>
                <div className="downloadBtns">
                  <a href="">
                    <Image src="assets/icons/gstore.png"/>
                  </a>
                  <a href="">
                    <Image src="assets/icons/apstore.png"/>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </section>
    )
  }
}
