import React, { Component } from 'react'
import store from 'store'
import { setSearchType } from 'actions'
import './style.css'

class DropDownMenu extends Component {
	setSearch = type => e => {
		e.stopPropagation()
		store.dispatch(setSearchType(type))
		this.props[0]()
	}

    render() {
        return (
        	<div className="font-avenir-light">
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('products')}>
           			<div className="ml-3 text-white text-uppercase bg-green px-3 pt-0 pb-0 btn w-15 drop-search-item">Produto</div>
           			<div className="w-85"></div>
	           	</div>
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('services')}>
	           		<div className="ml-3 text-white text-uppercase bg-blue px-3 pt-0 pb-0 btn w-15 drop-search-item">Serviço</div>
	           		<div className="w-85"></div>
	           	</div>
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('salon')}>
	           		<div className="ml-3 text-white text-uppercase bg-orange px-3 pt-0 pb-0 btn w-15 drop-search-item">Salão</div>
	           		<div className="w-85"></div>
	           	</div>
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('vendor')}>
	           		<div className="ml-3 text-white text-uppercase bg-brown px-1 pt-0 pb-0 btn w-15 drop-search-item">Vendedor</div>
	           		<div className="w-85"></div>
	           	</div>
			</div>
        );
    }
}

export default DropDownMenu