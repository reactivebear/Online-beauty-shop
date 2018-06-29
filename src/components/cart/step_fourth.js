import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTotal from 'components/cards/cart_total.js'
import ProductCart from 'components/cards/product_cart.js'

class StepFourth extends Component {
    printList = (item, i) => <ProductCart key={i} {...item} />

    render() {
        const { product, service } = this.props.cart.list
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
        			<h4>Meu carrinho</h4>
                    { [...product, ...service].map((item, i) => this.printList(item, i)) }
        		</div>
        		<div className="col-sm-6">
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
)(StepFourth)