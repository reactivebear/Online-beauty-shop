import React, { Component } from 'react'
import store, { history } from 'store'
import './product.css'
import Stars from 'components/stars'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main.js'
import { addToCart } from 'actions/cart.js'
import { addToWishList } from 'actions'
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
		if (val) {
			store.dispatch(addToWishList('product', this.props.id))
		}
	}

	getDescription = text => text.length > 25 ? `${text.slice(0, 25)}...` : text

	render() {
		const image = this.props.images.length ? this.props.images[0].image_url : ''
		
		return (
			<div className="card product rounded p-4 pointer mb-3 d-flex flex-column justify-content-between" onClick={this.goToProduct}>
				<div className="d-flex">
					<div className="w-30">
		            	<div className="mb-3">
		            		<img className="rounded img-fluid" style={{display: this.state.display}} src='/assets/images/default-image-square.png' alt="" />
		            		<img onLoad={this.handleOnLoad} className="rounded img-fluid" src={image} alt="" />
		            	</div>
	            	</div>
	            	<div className="px-2 w-70">
		            	<div className="mb-2">
		            		<strong>{this.props.name}</strong>
		            	</div>
		            	<div className="mb-2">
		            		<strong>{this.getDescription(this.props.description)}</strong>
		            	</div>
		            	<div>
		            		<Price current={this.props.price} old={this.props.discount_price} />
		            	</div>
	            	</div>
            	</div>
            	<div className="color-grey d-flex justify-content-between align-items-center mb-2">
            		<div>
	            		Avaliação<br />
	            		<Stars active={this.props.rating} />
            		</div>
            		<Heart onChange={this.toggleWish} />
            	</div>
            	<div>
        			<BtnMain
        				className="btn-block btn-outline font-weight-bold"
        				onClick={this.addToCart}
        				title="Adicionar ao carrinho" />
    				<BtnMain
        				className="btn-block font-weight-bold"
        				title="Comprar agora" />
        		</div>
			</div>
		)
	}
}

export default CardProduct