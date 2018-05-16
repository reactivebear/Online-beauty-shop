import React, { Component } from 'react'
import Stars from 'components/stars'
import Price from 'components/price'
import Tag from 'components/tags'
import BtnMain from 'components/buttons/btn_main.js'
import './service.css'

class CardService extends Component {
	state = {
		active: false
	}

	toggleCard = () => {
		this.setState({
			active: !this.state.active
		})
	}

    render() {
    	const tags = ['Hair', 'Salao', 'Wedding']
    	const collapseClass = this.state.active ? 'collapsed active box-shadow-bottom' : 'collapsed'
        return (
	        	<div className="card rounded p-4 pointer mb-3" onClick={this.toggleCard}>
	            	<div className="position-relative mb-3">
	            		<img className="rounded img-fluid" src="assets/images/default-image.png" alt="" />
	            		<div className="range-stripe">
	            			21.3 km
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
	            		<Price current={this.props.price} old={180.50} />
	            	</div>

	            	<div className="mb-2">
	            		<strong>Nino Garcia Hair</strong>
            		</div>

            		<div className="color-grey w-75 mb-3">
            			R. Girassol, 1158 - Vila Madalena, Sao Paulo - SP, 05433-00
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