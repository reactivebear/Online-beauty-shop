import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import Promoform from './forms/Promoform.jsx';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="app-page">
        <Grid fluid>
          <Col xs={12} sm={4}>
            <Image src="assets/images/mobile-app2.png" className="about-profile-pic" rounded />
          </Col>
          <Col xs={12} sm={4} smOffset={1}>
            <div className="app-heading">
              <h1>Baixe grátis o app do<br /> Visual Total</h1>
              <p>Não importa onde você está: busque, compre e venda tudo o que quiser pelo seu celular.</p>
            </div>
            <div className="downloadBtns">
              <a href="">
                <Image src="assets/icons/gstore-2.png" className="" />
              </a>
              <a href="">
                <Image src="assets/icons/appstore-2.png" className="" />
              </a>
            </div>
            <div className="form-wrap">
              <Promoform />
            </div>
            <div className="text-center">
              <p>Para receber um link para baixar sem custo por SMS adicione o seu telefone</p>
            </div>
          </Col>
        </Grid>
      </div>
    )
  }
}
