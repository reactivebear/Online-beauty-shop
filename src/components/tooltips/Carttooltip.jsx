import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Carttootip extends Component {
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
    var activclass = {
       addclass: this.state.shown ? "active" : ""
    };
    var CartProducts=[];

    for (var i=0; i<2; i++) {
          CartProducts.push(
            <div key={i} className="product">
              <div className="cart-product-img">
                <span className="p-nmbr">{i + 1}</span>
                <img src="assets/images/cart-product.jpg" alt="cart-product" />
              </div>
              <div className="cart-product-detail">
                <h5>Bonk Breaker Bars</h5>
                <h5>Mint chocolate chip</h5>
              </div>
              <div className="cart-product-price">
                <h5>R$ 54,98</h5>
                <a href="">Deletar</a>
              </div>
            </div>
          );
    }
    return (
      <div className="tooltip-div">
        <div id="cart-icon" className={activclass.addclass}  onClick={this.toggle.bind(this)}></div>
        <div id="cart-tooltip" style={ shownLogin }>
        <div className="arowForToltip"></div>
          <h3>Adicionado ao seu carrinho</h3>
          <div className="cart-products">
            {CartProducts}
          </div>
          <div className="gotoCart">
            <Link to="/cart" className="btn btn-success btn-success-trans">Ir para o meu carrinho</Link>
          </div>
        </div>
      </div>
    )
  }
}
