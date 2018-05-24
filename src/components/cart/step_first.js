import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart.js'
import ProductCart from 'components/cards/product_cart.js'
import CartTotal from 'components/cards/cart_total.js'

class StepFirst extends Component {
	componentWillMount() {
		store.dispatch(getCart())
        store.dispatch(getCartTotal())
	}

	printList = (item, i) => <ProductCart key={i} {...item} />

    render() {
		const { product, service } = this.props.cart.list
        
        return (
        	<div className="row">
        		<div className="col-sm-6">
                    <h4>Meu carrinho</h4>
        			{ [...product, ...service].map((item, i) => this.printList(item, i)) }
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
            list: state.cart.list,
            total: state.cart.total
        }
    }
}

export default connect(
    mapStateToProps
)(StepFirst)