import React, { Component } from 'react'
import Stars from 'components/stars'
import Price from 'components/price'
import Tag from 'components/tags'
import BtnMain from 'components/buttons/btn_main.js'
import style from './service.css'

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
	        	<div className="card rounded p-3 pointer box-shadow" onClick={this.toggleCard}>
	        		
	            	<div className="relative">
	            		<img className="rounded img-fluid" src="assets/img/default-image.png" alt="" />
	            		<div className="range-stripe">
	            			21.3 km
	            		</div>
	            	</div>
	            	<div>
	            		Massage & Ofuro - Premium
	            	</div>
	            	<div className="color-grey">
	            		Avaliação<br />
	            		<Stars active={5} />
	            		<i className="far fa-heart float-right"></i>
	            	</div>
	            	<div>
	            		<Price current={159.50} old={180.90} />
	            	</div>
	            	<div className="relative">
		            	<div className={collapseClass}>
		            		Nino Garcia Hair
		            		<div className="color-grey">
		            			R. Girassol, 1158 - Vila Madalena, Sao Paulo - SP, 05433-00
		            		</div>
		            		<div className="form-group">
		            			{ tags.map((item, i) => <Tag key={i} title={item} />) }
		            		</div>
		            		<div>
		            			<div className="row justify-content-between mb-1">
		            				<div className="col-6">
				            			<BtnMain
				            				className="btn-block btn-outline"
				            				title="Agendar agora" />
		            				</div>
		            				<div className="col-6">
				        				<BtnMain
				        					className="btn-block btn-outline"
				            				title="Exibir servicos" />
		            				</div>
		        				</div>
		            			<BtnMain
		            				className="btn-block"
		            				title="Adicionar ao carrinho" />
		            		</div>
		            	</div>
	            	</div>
				</div>
        );
    }
}

export default CardService