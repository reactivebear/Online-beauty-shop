import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col,Glyphicon,Grid,Image} from 'react-bootstrap';
import './Footer.css';
var FontAwesome = require('react-fontawesome');
export default class Footer extends Component {
  render() {
    return (
      <footer>
          <Grid>
            <Row className="content">
              <Col sm={3}>
                <div className="footerLogo">
                  <Image src="assets/images/footerLogo.png" />
                </div>
                <div className="social">
                <FontAwesome
                   className='super-crazy-colors'
                   name='rocket'
                   size='2x'
                   spin
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
                </div>
              </Col>
              <Col sm={2}>
                <div className="site-links">
                  <div className="footer-heading">
                    <h4>Quem somos</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="">Conheça-nos</a>
                    </li>
                    <li>
                      <a href="">Sobre o App</a>
                    </li>
                    <li>
                      <a href="">Sobre o Blog</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={3}>
                <div className="site-links">
                  <div className="footer-heading">
                    <h4>Serviços</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="">Ofereça seus serviços</a>
                    </li>
                    <li>
                      <a href="">Anuncie seus produtos</a>
                    </li>
                    <li>
                      <a href="">Anuncie no site e no app</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={3}>
                <div className="site-links">
                  <div className="footer-heading">
                    <h4>Informação</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="">Deixe-nos te ajudar</a>
                    </li>
                    <li>
                      <a href="">Políticas</a>
                    </li>
                    <li>
                      <a href="">Vantagens</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className="copyright">
                  <p>© 2018 visual total</p>
                </div>
                <div  className="pull-right flags">
                  <a href="">
                    <Image src="assets/images/american-flag.png" />
                  </a>
                  <a href="">
                    <Image src="assets/images/flag-2.png" />
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
      </footer>
    )
  }
}
