import React, { Component } from 'react'
import store from 'store'
import ImagePreview from 'components/images/preview.js'
import Counter from 'components/counter'
import Price from 'components/price'
import { removeFromCart, changeQuantity } from 'actions/cart.js'

class ProductCart extends Component {
	removeFromCart = e => {
		store.dispatch(removeFromCart(this.props.id))
	}

	changeQuantity = val => {
		store.dispatch(changeQuantity(this.props.id, val))
	}

    render() {
    	const col = this.props.type === 'product' ? 'col-sm-8 col-6' : 'col-12'
        return (
        	<div className="d-flex rounded bg-white p-2 mb-3">
	            <div className="w-20">
	            	<ImagePreview images={this.props[this.props.type].images} />
	            </div>
	            <div className="w-80 pl-2 position-relative">
	            	{ this.props[this.props.type].name || this.props[this.props.type].title }
	            	<div className="form-group">
	            		<span className="color-grey">Vendido e entregue por </span>
	            		<a href="javascript:;">{this.props[this.props.type].brand_id || this.props[this.props.type].vendor.organization_name}</a>
	            		<i className="far fa-trash-alt fa-12x color-green pointer float-right d-block d-sm-none" onClick={this.removeFromCart}></i>
	            	</div>
	            	<div className="row align-items-stretch">
		            	{
		            		this.props.type === 'product'
		            		? 	
		            				<div className="col-sm-4 col-6">
		            					<Counter onChange={val => this.changeQuantity(val)} value={this.props.quantity} />
	            					</div>
	            				
		            		: 	''
		            	}
		            	<div className={`${col} align-self-end`}>
		            		<div className="row">
		            			<div className="col-sm-8">
		            				<Price current={this.props.total} />
	            				</div>
	            				<div className="col-4 align-self-end text-right d-none d-sm-block">
	            					<i className="far fa-trash-alt fa-12x color-green pointer" onClick={this.removeFromCart}></i>
	            				</div>
	            			</div>
		            	</div>
	            	</div>
	            	
	            </div>
			</div>
        );
    }
}

export default ProductCart