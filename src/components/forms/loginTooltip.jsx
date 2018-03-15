import React, { Component } from 'react'
import axios from 'axios';
import { ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

export default class Loginform extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      msg: '',
    };
  }
  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post(`http://visualtotal.com.br/login?email=${email}&password=${password}`)
    .then((res) => {
      this.setState({ msg: <div className="alert alert-success">Login Successfuly</div>});
      console.log(res.data.apikey.key);
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
        const msg = error.response.data.message;
        this.setState({ msg: <div className="alert alert-danger">{msg}</div>});
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    // .then(function(res) {
    //   
    // })
  }

  render() {
    const { email, password} = this.state;
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
      </div>

    );
  }
}
