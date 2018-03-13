import React, { Component } from 'react'
import Loginform from '../forms/loginTooltip.jsx';

export default class Headerlogin extends Component {
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
        <p className="login-tooltip" onClick={this.toggle.bind(this)}><strong>Contas e Listas</strong></p>
        <div id="logintooltipContent" style={ shownLogin }>
          <h3>Identificação</h3>
          <Loginform />
        </div>
      </div>
    )
  }
}
