import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart.js'
import CartTotal from 'components/cards/cart_total.js'

class StepFirst extends Component {
    render() {
		const { product, service } = this.props.cart.list
        
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
                    <h4>Meu carrinho</h4>
                    
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
)(StepFirst)