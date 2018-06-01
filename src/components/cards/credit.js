import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'

class CardCredit extends Component {
    render() {
        return (
        	<div>
        		<div className="rounded bg-white border p-3">
	            	<div className="fs-22 color-green text-right">05%</div>
	            	<div className="px-3 mb-3">
	            		<img src="/assets/images/credits.png" className="img-fluid" alt="" />
	            	</div>
	            	<div className="text-center fs-18">
	            		Promoção
	            	</div>
	            	<div className="d-flex align-items-center mb-3">
	            		<span className="color-grey">5040 Créditos por </span>
	            		&nbsp;
	            		<span className="fs-18"> R$ 684,00</span>
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