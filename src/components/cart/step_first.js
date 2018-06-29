import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart'
import ProductCart from 'components/cards/product_cart'
import CartTotal from 'components/cards/cart_total'

class StepFirst extends Component {
	componentWillMount() {
		store.dispatch(getCart())
        store.dispatch(getCartTotal())
	}

	printList = (item, i) => <ProductCart key={i} {...item} />

    render() {
		const { product, service } = this.props.cart.list
        
        return (
        	<div className="row pb-5">
        		<div className="col-md-6">
                    <h4>Meu carrinho</h4>
                    {
                        [...product, ...service].length
                        ?   [...product, ...service].map((item, i) => this.printList(item, i))
                        :   <div className="rounded p-5 bg-white">O seu carrinho está vazio</div>
                    }
        		</div>
        		<div className="col-md-6">
        			<h4>Resumo do pedido</h4>
                    <CartTotal step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            list: state.cart.list,
        }
    })

export default connect(
    mapStateToProps
)(StepFirst)