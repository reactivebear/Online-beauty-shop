import React, { Component } from 'react'
import { history } from 'store'
import Price from 'components/price'
import { getDate } from 'utils/date.js'
import BtnMain from 'components/buttons/btn_main.js'

class CardPurchase extends Component {
	printList = (item, i) => {
		const key = item.product ? 'product' : 'service'
		const name = item[key].name || item[key].title
		return <div key={i}>{name}</div>
	}

	goDetails = () => {
		history.push(`purchased/${this.props.id}`)
	}

    render() {
    	const { products, services } = this.props.items

        return (
        	<div className="rounded bg-white border p-3 mb-3 h-100">
        		<div className="d-flex align-items-end flex-column bd-highlight h-100">
		            <div className="row">
		            	<div className="col-6 mb-3">
		            		<div className="color-grey">Pedido:</div>
		            		<div>{this.props.id}</div>
		            	</div>
		            	<div className="col-6 mb-3">
		            		<div className="color-grey">Valor:</div>
		            		<div><Price current={this.props.items_total} /></div>
		            	</div>
		            	<div className="col-6 mb-3">
		            		<div className="color-grey">Data de compra:</div>
		            		<div>{getDate(this.props.created_at)}</div>
		            	</div>
		            	<div className="col-6 mb-3">
		            		<div className="color-grey">ID:</div>
		            		<div>#{this.props.id}</div>
		            	</div>
		            	<div className="col-12 mb-3">
		            		<div className="color-grey">Produto(s):</div>
		            		<div>
		            			{ [...products, ...services].map((item, i) => this.printList(item, i)) }
		            		</div>
		            		
		            	</div>
	            	</div>
	            	<div className="mt-auto w-100">
	            		<div className="color-grey mb-3">Vendido e entregue por</div>
		            	<BtnMain
	        				className="btn-block font-weight-bold"
	        				onClick={this.goDetails}
	        				title="Detalhes do pedido" />
    				</div>
	            </div>
			</div>
        );
    }
}

export default CardPurchase