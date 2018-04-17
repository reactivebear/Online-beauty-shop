import React, {Component} from 'react'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {Api} from '../../api/api';

export default class Loginform extends Component {
  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    Api.login(email, password)
        .then((res) => {
          this.setState({
            msg: <div className="alert alert-success">Login Successful</div>
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
            const msg = error.response.data.message;
            this.setState({
              msg: <div className="alert alert-danger">{msg}</div>
            });
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      msg: '',
    };
  }

  render() {
    const {email, password} = this.state;
    return (
        <div className="login-form-wrap">
          <div>{this.state.msg}</div>
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="arowForToltip"></div>
            <FormGroup
                controlId="email"
            >
              <ControlLabel>E-mail</ControlLabel>
              <FormControl
                  type="email"
                  placeholder="igor.anjos@wemind.com.br"
                  name="email"
                  value={email} onChange={this.onChange}
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
                  name="password"
                  value={password} onChange={this.onChange}
              />
              <div className="text-right form-link">
                <a href="jsx-a11y/href-no-hash">Esqueci minha senha</a>
              </div>
            </FormGroup>
            <Button type="submit" bsStyle="success"
                    className="loginBtn">Login</Button>
            <div className="text-center form-link">
              <a href="jsx-a11y/href-no-hash">Não registrado ainda? Clique
                aqui</a>
            </div>
            <div className="social-logins">
              <FormGroup>
                <Button type="submit" bsStyle="primary" className="loginBtnfb">Entrar
                  com o Facebook</Button>
              </FormGroup>
              <FormGroup>
                <Button type="submit" bsStyle="danger" className="loginBtngp">Entrar
                  com o Google +</Button>
              </FormGroup>
              <FormGroup>
                <Button type="submit" bsStyle="info" className="loginBtntw">Entrar
                  com o Twitter</Button>
              </FormGroup>
            </div>
          </form>
        </div>

    );
  }
}
