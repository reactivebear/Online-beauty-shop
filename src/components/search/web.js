import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import BtnMain from 'components/buttons/btn_main'
import { getAutocomplete, setSearchQuery } from 'actions'
import './style.css'
import DropDownMenu from 'components/menu/drop_down_menu'
import Tooltip from 'components/tooltip'

class WebSearch extends Component {
	constructor(props) {
		super(props)
		history.listen((location, action) => {
			if (location.pathname !== '/search') {
	            this.query.value = ''
	        }
        })

        this.state = {
        	active: false
        }
	}

	setAutocomplete = e => {
		if (!this.state.active) {
			this.setState({active: true})
			document.body.addEventListener('click', this.closeDropDown)
		}
		store.dispatch(setSearchQuery(e.target.value))
		store.dispatch(getAutocomplete(e.target.value))
	}

	closeDropDown = e => {
		if (! e.target.closest('#main-dropdown')) {
			this.setState({active: false})
			document.body.removeEventListener('click', this.closeDropDown)
		} else {
			this.query.focus()
		}
	}

	toggleDropDown = e => {
		e.stopPropagation()
		if (this.state.active) {
			document.body.removeEventListener('click', this.closeDropDown)
		} else {
			document.body.addEventListener('click', this.closeDropDown)
		}
		
		this.setState({active: !this.state.active})
	}

	search = e => {
		e.preventDefault()
		history.push(`/search#type=${this.props.search.type}&search_text=${this.query.value}`)
	}

	getSearchType = () => {
		switch(this.props.search.type) {
			case 'products': return 'Produto'
			case 'services': return 'Serviço'
			case 'salon': return 'Salão'
			case 'vendor': return 'Vendedor'
			default: return 'Todos'
		}
	}

    render() {
        return (
        	<div>
	            <form className="input-group d-none d-sm-flex" onSubmit={this.search}>
	            	<div className="input-group-prepend" id="main-dropdown">
					    <button type="button" onClick={this.toggleDropDown} className="btn btn-drop-search pl-3">
					    	{ this.getSearchType() }
					    	<i className="fas fa-chevron-down px-3"></i>
				    	</button>
				    	{
				    		this.state.active
				    		? 	<Tooltip type="menu" content={DropDownMenu} close={() => this.setState({active: false})} />
				    		: 	''
				    	}
				  	</div>
					<input 
						type="text"
						onChange={this.setAutocomplete}
						className="form-control with-shadow border-0" 
						ref={ref => this.query = ref} 
						placeholder="           Buscar por produtos e serviços" />
					<div className="input-group-append">
					    <BtnMain
					    	className="btn-search px-4 pt-2"
					    	type="submit"
					    	title={<i className="fa fa-search" aria-hidden="true"></i>} />
				  	</div>
				</form>
				<form className="input-group d-flex d-sm-none">
					<input 
						type="text"
						className="form-control with-shadow border-0" 
						ref={ref => this.query = ref} 
						placeholder="Buscar por produtos e serviços" />
					<div className="input-group-append">
					    <BtnMain
					    	className="btn-search px-4 pt-2"
					    	onClick={this.search}
					    	title={<i className="fa fa-search" aria-hidden="true"></i>} />
				  	</div>
				</form>
			</div>
        )
    }
}

const mapStateToProps = state =>
    ({ 
        search: {
            type: state.search.type,
        }
    })

export default connect(
    mapStateToProps
)(WebSearch)