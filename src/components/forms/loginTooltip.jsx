import React, { Component } from 'react'
import { ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';
export default class Loginform extends Component{
  render() {
    return (
      <form className="login-form">
        <div className="arowForToltip"></div>
        <FormGroup
          controlId="email"
        >
          <ControlLabel>E-mail</ControlLabel>
          <FormControl
            type="email"
            placeholder="igor.anjos@wemind.com.br"
          />
        </FormGroup>
        <FormGroup
          controlId="pswrd"
        >
          <ControlLabel>Senha</ControlLabel>
          <FormControl
            type="password"
            placeholder="**********"
            autoComplete=""
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
