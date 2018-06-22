import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { setSearchType } from 'actions'
import './style.css'

class DropDownMenu extends Component {
	setSearch = type => e => {
		e.stopPropagation()
		store.dispatch(setSearchType(type))
		this.props[0]()
	}

	setResult = type => {
		
		if (this.props.search.autocomplete[type].length && this.props.search.query.length) {
			const start = this.props.search.autocomplete[type][0].toLowerCase().indexOf(this.props.search.query.toLowerCase())
			const finish = start + this.props.search.query.length
			return 	<span className="pl-3">
						<span>{this.props.search.autocomplete[type][0].slice(0, start)}</span>
						<strong>{this.props.search.autocomplete[type][0].slice(start, finish)}</strong>
						<span>{this.props.search.autocomplete[type][0].slice(finish)}</span>
					</span>
		}
	}

    render() {
        return (
        	<div className="font-avenir-light">
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('products')}>
           			<div className="ml-3 text-white text-uppercase bg-green px-3 pt-0 pb-0 btn w-15 drop-search-item">Produto</div>
           			<div className="w-85">{this.setResult('product')}</div>
	           	</div>
	           	<div className="py-2 d-flex pointer wrap-drop-search" onClick={this.setSearch('services')}>
	           		<div className="ml-3 text-white text-uppercase bg-blue px-3 pt-0 pb-0 btn w-15 drop-search-item">Serviço</div>
	           		<div className="w-85">{this.setResult('service')}</div>
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

const mapStateToProps = state =>
    ({ 
        search: {
            autocomplete: state.search.autocomplete,
            query: state.search.query
        }
    })

export default connect(
    mapStateToProps
)(DropDownMenu)