import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTotal from 'components/cards/cart_total.js'

class StepThird extends Component {
    render() {
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
        			<h4>Dados do cartão</h4>
        		</div>
        		<div className="col-sm-6">
        			<h4>Resumo do pedido</h4>
                    <CartTotal value={this.props.cart.total} step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: {
            total: state.cart.total
        }
    }
}

export default connect(
    mapStateToProps
)(StepThird)