import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Col, DropdownButton, Grid, Image, MenuItem, Row} from 'react-bootstrap';

import DownloadAppButtonSmall from '../templates/DownloadAppButtonSmall.jsx';

import './Footer.css';
var FontAwesome = require('react-fontawesome');
export default class Footer extends Component {
  render() {
    return (
      <footer>
          <Grid>
            <Row className="content">
              <Col >
                <Row className="footer-top">
                  <div className="footerLogo">
                    <Image src="assets/images/footerLogo.png" />
                  </div>

                  <DownloadAppButtonSmall />

                </Row>
                <Row className="footer-center">

                  <Row>
                    <Col>
                      <h4>Quem somos</h4>
                      <p>Sobre o App</p>
                      <p>Sobre o Blog</p>
                    </Col>
                    <Col>
                      <h4>Vantagens para clientes</h4>
                      <p>Ofereça seus serviços</p>
                      <p>Anuncie seus produtos</p>
                    </Col>
                    <Col>
                      <h4>Localização</h4>
                      <p>Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</p>
                      <p>Rua Girassol, 1158 - Vila Madalena, São Paulo - SP</p>
                    </Col>
                    <Col>
                      <h4>Conecte-se conosco</h4>
                      <p>(55) +11 3003-0230</p>
                      <p>visualtotal@contato.com.br</p>
                    </Col>
                    <Col>
                      <h4>Sobre a WeMind Group</h4>
                      <p>Carreiras</p>
                      <p>Conheça a WeMind</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Uma empresa WeMind Group - www.wemindgroup.com</p>
                    </Col>
                    <Col>
                      <div className="social">
                        <div className="facebook">
                          <a href=""><FontAwesome
                            name='facebook'
                          /></a>
                        </div>
                        <div className="instagram">
                          <a href=""><FontAwesome
                            name='instagram'
                          /></a>
                        </div>
                        <div className="twiter">
                          <a href=""><FontAwesome
                            name='twitter'
                          /></a>
                        </div>
                        <div className="google-plus">
                          <a href=""><FontAwesome
                            name='google-plus'
                          /></a>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <p>Selecione um país/região</p>
                      <DropdownButton
                        bsStyle="default"
                        /* TODO: must get title from state */
                        title="Selecione um país/região"
                        key={1}
                        noCaret
                      >
                        <MenuItem id="Brazil - Português" key={1} active>Brazil - Português</MenuItem>
                        <MenuItem id="EUA - English" key={2}>EUA - English</MenuItem>
                      </DropdownButton>
                    </Col>
                  </Row>

                </Row>
                <Row className="footer-bottom">
                  <Col>
                  <p>© WeMind 2018 - TODOS OS DIREITOS RESERVADOS.</p>
                  </Col>
                </Row>
                
              </Col>

              
              {/* <Col >
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
              <Col >
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
              <Col >
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
              </Col> */}

            </Row>

            {/* <Row>
              <Col >
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
            </Row> */}

          </Grid>
      </footer>
    )
  }
}
