import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import { getCart, removeFromCart } from 'actions/cart.js'
import BtnMain from 'components/buttons/btn_main.js'
import Price from 'components/price'
import ImagePreview from 'components/images/preview.js'

class CartHeader extends Component {
	componentWillMount() {
		store.dispatch(getCart())
	}
	
	removeFromCart = id => e => {
		e.stopPropagation()
		store.dispatch(removeFromCart(id))
	}

	goToCart = () => {
		this.props[0]()
		history.push('/cart')
	}

	printList = (item, i) => {
		return 	<div key={i} className="mb-4">
					<div className="d-flex">
						<div className="w-15">
							<div className="position-relative">
								<ImagePreview image={item.images} />
								<span style={{top: -5, right: -5}} className="badge bg-green badge-pill text-white position-absolute py-1">{item.quantity}</span>
							</div>
						</div>
						<div className="w-85 px-2">
							<div className="d-flex">
								<div className="w-50">
									<span className="color-grey">{ item[item.type].name || item[item.type].title }</span>
								</div>
								<div className="w-50 text-right">
									<Price current={item.total} />
									<i className="far fa-trash-alt color-green pointer" onClick={this.removeFromCart(item.id)}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
	}

    render() {
    	const { product, service } = this.props.cart.list
        return (
        	<div>
	            { 	[...product, ...service].length 
	            	? 	[...product, ...service].map((item, i) => this.printList(item, i))
	            	: 	<div className="text-center mb-3">Empty cart</div> 
            	}
            	{
            		[...product, ...service].length
            		?	<div className="row justify-content-center">
		            		<div className="col-10">
					            <BtnMain
				                    className="btn-block btn-outline font-weight-bold"
				                    onClick={this.goToCart}
				                    title="Ir para o meu carrinho" />
		                    </div>
		                </div>
	                : 	''
            	}
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
)(CartHeader)