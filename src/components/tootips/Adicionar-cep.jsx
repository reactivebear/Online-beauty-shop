import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Addzip from '../forms/Addzip-form.jsx';
export default class Adicionar extends Component {
  constructor() {
  super();
  this.state = {
      shown: false,
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    var shownLogin = {
      display: this.state.shown ? "block" : "none"
    };
    return (
      <div className="tooltip-div">
        <p className="login-tooltip" onClick={this.toggle.bind(this)}><span className="location-icon"></span></p>
        <div className="tootlip" id="adicionartooltipContent" style={ shownLogin }>
          <h3>Adicionar CEP</h3>
          <p>Busque por serviços mais próximos de você
              as opções e velocidade de entrega podem
              variar de acordo com a região</p>
          <Button bsStyle="success" className="loginBtn">Faça login</Button>
          <div className="title"><span>ou insira um cep</span></div>
          <Addzip />
        </div>
      </div>
    )
  }
}
