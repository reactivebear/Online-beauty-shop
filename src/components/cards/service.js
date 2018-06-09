import React, { Component } from 'react'
import store from 'store'
import { addToCart } from 'actions/cart.js'
import { addToWishList } from 'actions'
import Stars from 'components/stars'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main.js'
import Distance from 'utils/distance.js'
import Heart from 'components/heart'
import './service.css'

class CardService extends Component {
	state = {
		active: false,
		range: '0.0 km'
	}

	toggleCard = () => {
		this.setState({
			active: !this.state.active
		})
	}

	addToCart = () => {
		store.dispatch(addToCart(this.props.id, 'service', {quantity: 1}))
	}

	getAddress = address => {
		return `${address.title}, ${address.street}, ${address.city} - ${address.state}, ${address.zipcode}`
	}

	getDistance = () => {
		let range = false
		const address = this.props.vendor.address || this.props.address
		navigator.geolocation.getCurrentPosition(pos => {
			range = Distance.get(pos.coords.latitude, pos.coords.longitude, address.latitude, address.longitude)
			if (range) {
				this.setState({
					range: range
				})
			}
		})
	}

	toggleWish = val => {
		if (val) {
			store.dispatch(addToWishList('service', this.props.id))
		}
	}

	componentWillMount() {
		this.getDistance()
	}

    render() {
        return (
	        	<div className="card rounded pointer h-100 service-card position-relative" onClick={this.toggleCard}>
	        		<div className="d-flex align-items-end flex-column h-100 p-4">
		        		<div>
			            	<div className="position-relative mb-3">
			            		<img className="rounded img-fluid" src="/assets/images/default-image.png" alt="" />
			            		<div className="range-stripe">
			            			{this.state.range}
			            		</div>
			            	</div>
			            	<div className="mb-2">
			            		<strong>{this.props.title}</strong>
			            	</div>

			            	<div className="color-grey d-flex justify-content-between align-items-center mb-2">
			            		<div>
				            		Avaliação<br />
				            		<Stars active={this.props.rating} />
			            		</div>
			            		<Heart onChange={this.toggleWish} />
			            	</div>

			            	<div className="mb-2">
			            		<Price current={this.props.price} old={this.props.discount_price} />
			            	</div>
	            		</div>
	            		
            		</div>
            		<div className="position-relative z-index-1 w-100 wrap-service-hidden-block">
	            		<div className="service-hiiden-block position-absolute bg-white px-4 border-top-0 rounded-bottom">
	            			<div className="mb-1">
			            		<strong>{this.props.vendor.organization_name}</strong>
		            		</div>
		            		<div className="color-grey w-75 mb-3">
		            			{this.getAddress(this.props.vendor.address || this.props.address)}
		            		</div>
	            			<div className="row justify-content-between mb-1">
	            				<div className="col-lg-6 pr-lg-1 mb-1 md-sm-0">
			            			<BtnMain
			            				className="btn-block btn-outline font-weight-bold"
			            				title="Agendar agora" />
	            				</div>
	            				<div className="col-lg-6 pl-lg-1">
			        				<BtnMain
			        					className="btn-block btn-outline font-weight-bold px-1"
			        					onClick={this.addToCart}
			            				title="Adicionar ao carrinho" />
	            				</div>
	        				</div>
	            			<BtnMain
	            				className="btn-block font-weight-bold"
	            				title="Exibir servicos" />
	            		</div>
            		</div>
				</div>
        );
    }
}

export default CardService