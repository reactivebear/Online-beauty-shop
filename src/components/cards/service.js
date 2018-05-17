import React, { Component } from 'react'
import Stars from 'components/stars'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main.js'
import Distance from 'utils/distance.js'
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

	getAddress = address => {
		return `${address.title}, ${address.street}, ${address.city} - ${address.state}, ${address.zipcode}`
	}

	distance = (lat1, lon1, lat2, lon2, unit) => {
		let radlat1 = Math.PI * lat1/180
		let radlat2 = Math.PI * lat2/180
		let theta = lon1-lon2
		let radtheta = Math.PI * theta/180
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist
	}

	getDistance = () => {
		let range = false
		navigator.geolocation.getCurrentPosition((pos) => {
			range = Distance.get(pos.coords.latitude, pos.coords.longitude, this.props.vendor.address.latitude, this.props.vendor.address.longitude)
			if (range) {
				this.setState({
					range: range
				})
			}
		})
	}

	componentWillMount() {
		this.getDistance()
	}

    render() {
    	const collapseClass = this.state.active ? 'collapsed active box-shadow-bottom' : 'collapsed'
        return (
	        	<div className="card rounded p-4 pointer mb-3" onClick={this.toggleCard}>
	            	<div className="position-relative mb-3">
	            		<img className="rounded img-fluid" src="assets/images/default-image.png" alt="" />
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
	            		<i className="far fa-heart fs-22"></i>
	            	</div>

	            	<div>
	            		<Price current={this.props.price} old={this.props.discount_price} />
	            	</div>

	            	<div className="mb-2">
	            		<strong>{this.props.vendor.organization_name}</strong>
            		</div>

            		<div className="color-grey w-75 mb-3">
            			{this.getAddress(this.props.vendor.address)}
            		</div>

            		<div>
            			<div className="d-flex justify-content-between mb-1">
            				<div className="w-50 pr-1">
		            			<BtnMain
		            				className="btn-block btn-outline font-weight-bold"
		            				title="Agendar agora" />
            				</div>
            				<div className="w-50 pl-1">
		        				<BtnMain
		        					className="btn-block btn-outline font-weight-bold"
		            				title="Adicionar ao carrinho" />
            				</div>
        				</div>
            			<BtnMain
            				className="btn-block font-weight-bold"
            				title="Exibir servicos" />
            		</div>
				</div>
        );
    }
}

export default CardService