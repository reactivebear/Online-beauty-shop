import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart } from 'actions/cart.js'
import ProductCart from 'components/cards/product_cart.js'

class StepFirst extends Component {
	componentWillMount() {
		store.dispatch(getCart())
	}

	printList = (item, i) => <ProductCart key={i} {...item} />

    render() {
		const { product, service } = this.props.cart.list
        return (
        	<div className="row">
        		<div className="col-sm-6">
        			{ [...product, ...service].map((item, i) => this.printList(item, i)) }
        		</div>
        		<div className="col-sm-6">
        			Step first
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: {
            list: state.cart.list
        }
    }
}

export default connect(
    mapStateToProps
)(StepFirst)