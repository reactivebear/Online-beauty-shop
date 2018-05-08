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

                <Row className="footer-top">
                  <div className="footer-logo">
                    <Image src="assets/images/LogoVisualTotal.png" />
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
                </Row>
                <Row className="footer-bottom">
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
                  <Row>
                    <Col className="copyright">
                      <p>© WeMind 2018 - TODOS OS DIREITOS RESERVADOS.</p>
                    </Col>
                  </Row>
                </Row>
                
            </Row>
          </Grid>
      </footer>
    )
  }
}
