import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart.js'
import CartTotal from 'components/cards/cart_total.js'
import BtnMain from 'components/buttons/btn_main'

class StepSecond extends Component {
    render() {
		const { product, service } = this.props.cart.list
        
        return (
        	<div className="row pb-5">
                <div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    <div className="rounded bg-white p-4 mb-3">
                    </div>
                    <div className="mb-3">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold bg-main"
                            onClick={this.addToCart}
                            title="Alterar endereço" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <h4>Resumo do pedido</h4>
                    <CartTotal value={this.props.cart.total} step={this.props.step} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            list: state.cart.list,
            total: state.cart.total
        }
    })

export default connect(
    mapStateToProps
)(StepSecond)