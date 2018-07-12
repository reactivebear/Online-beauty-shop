import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main'
import Price from 'components/price'

class CardCredit extends Component {
	addToCart = () => {
		//store.dispatch(buyCreditBundle(this.props.id, 'credits'))
	}

    render() {
    	console.log(this.props)
        return (
        	<div>
        		<div className="rounded bg-white border p-3">
	            	<div className="fs-22 color-green text-right">{this.props.discount_percentage * 100}%</div>
	            	<div className="px-3 mb-3">
	            		<img src="/assets/images/credits.png" className="img-fluid" alt="" />
	            	</div>
	            	<div className="text-center fs-18">
	            		Promoção
	            	</div>
	            	<div className="d-flex align-items-center mb-3">
	            		<span className="color-grey">{this.props.amount} Créditos por </span>
	            		&nbsp;
	            		<Price style={{fontSize: 18}} current={this.props.discount_price} />
	            	</div>
	            	<BtnMain
        				className="btn-block btn-outline font-weight-bold"
        				onClick={this.addToCart}
        				title="Adicionar ao carrinho" />
    				<BtnMain
        				className="btn-block font-weight-bold"
        				title="Comprar agora" />
		        </div>
			</div>
        );
    }
}

export default CardCredit