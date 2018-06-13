import React, { Component } from 'react'
import store, { history } from 'store'
import './product.css'
import Stars from 'components/stars'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main.js'
import { addToCart } from 'actions/cart.js'
import { addToWishList, removeFromWishList } from 'actions'
import Heart from 'components/heart'

class CardProduct extends Component {
	state = {
		display: 'block'
	}

	handleOnLoad = e => { this.setState({display: 'none'}) }

	goToProduct = e => history.push(`/product/${this.props.id}`)

	addToCart = e => {
		e.stopPropagation()
		store.dispatch(addToCart(this.props.id, 'product', {quantity: 1}))
	}

	toggleWish = val => {
		val ? store.dispatch(addToWishList('product', this.props.id)) : store.dispatch(removeFromWishList('product', this.props.id))
	}

	getDescription = text => text.length > 25 ? `${text.slice(0, 25)}...` : text

	render() {
		const image = this.props.images ? (this.props.images.length ? this.props.images[0].image_url : '') : ''

		return (
			<div className="card product rounded p-2 pointer d-flex flex-column justify-content-between" onClick={this.goToProduct}>
				<div className="d-flex mb-2">
					<div className="w-40">
		            	<div>
		            		<img className="rounded img-fluid" style={{display: this.state.display}} src='/assets/images/default-image-square.png' alt="" />
		            		<img onLoad={this.handleOnLoad} className="rounded img-fluid" src={image} alt="" />
		            	</div>
	            	</div>
	            	<div className="px-2 w-60">
		            	<div className="mb-1">
		            		<strong>{this.props.name}</strong>
		            	</div>
		            	<div className="mb-1">
		            		<strong>{this.getDescription(this.props.description)}</strong>
		            	</div>
		            	<div className="color-grey d-flex justify-content-between align-items-center mb-1">
		            		<div>
			            		Avaliação<br />
			            		<Stars active={this.props.rating} />
		            		</div>
		            		<Heart onChange={this.toggleWish} active={this.props.in_wishlist} />
		            	</div>
		            	<div>
		            		<Price current={this.props.price} old={this.props.discount_price} />
		            	</div>
	            	</div>
            	</div>

            	<div className="row justify-content-between">
            		<div className="col-xl-6 pr-xl-1 mb-2 md-sm-0">
            			<BtnMain
	        				className="btn-block btn-outline font-weight-bold px-1"
	        				onClick={this.addToCart}
	        				title="Adicionar ao carrinho" />
            		</div>
        			<div className="col-xl-6 pl-xl-1">
	    				<BtnMain
	        				className="btn-block font-weight-bold"
	        				title="Comprar agora" />
    				</div>
        		</div>
			</div>
		)
	}
}

export default CardProduct