import React, { Component } from 'react'

import { ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

export default class Loginform extends Component{
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form className="login-form">
        <div className="arowForToltip"></div>
        <FormGroup
          controlId="email"
          validationState={this.getValidationState()}
        >
          <ControlLabel>E-mail</ControlLabel>
          <FormControl
            type="email"
            value={this.state.value}
            placeholder="igor.anjos@wemind.com.br"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup
          controlId="pswrd"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Senha</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="**********"
            onChange={this.handleChange}
          />
          <div className="text-right form-link">
          <a href="jsx-a11y/href-no-hash">Esqueci minha senha</a>
          </div>
        </FormGroup>
        <Button type="submit" bsStyle="success" className="loginBtn">Login</Button>
        <div className="text-center form-link">
          <a href="jsx-a11y/href-no-hash">Não registrado ainda? Clique aqui</a>
        </div>
        <div className="social-logins">
          <FormGroup>
            <Button type="submit" bsStyle="primary" className="loginBtnfb">Entrar com o Facebook</Button>
          </FormGroup>
          <FormGroup>
            <Button type="submit" bsStyle="danger" className="loginBtngp">Entrar com o Google +</Button>
          </FormGroup>
          <FormGroup>
            <Button type="submit" bsStyle="info" className="loginBtntw">Entrar com o Twitter</Button>
          </FormGroup>
        </div>
      </form>
    );
  }
}
