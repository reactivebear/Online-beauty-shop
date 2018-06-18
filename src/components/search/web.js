import React, { Component } from 'react'
import store, { history } from 'store'
import BtnMain from 'components/buttons/btn_main.js'
import { getSearch } from 'actions'
import './style.css'
import DropDownMenu from 'components/menu/drop_down_menu'
import Tooltip from 'components/tooltip'

class WebSearch extends Component {
	constructor(props) {
		super(props)
		history.listen((location, action) => {
            this.query.value = ''
        })

        this.state = {
        	active: false
        }
	}

	closeDropDown = e => {
		if (! e.target.closest('#main-dropdown')) {
			this.setState({active: false})
			document.body.removeEventListener('click', this.closeDropDown)
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
		const params = {search_text: this.query.value}
		store.dispatch(getSearch('pagination', {page_size: 6, ...params}))
		history.push('/search')
	}

    render() {
        return (
            <form className="input-group" onSubmit={this.search}>
            	<div className="input-group-prepend">
				    <button id="main-dropdown" type="button" onClick={this.toggleDropDown} className="btn btn-drop-search pl-3">
				    	Todos
				    	<i className="fas fa-chevron-down px-3"></i>
			    	</button>
			    	{
			    		this.state.active
			    		? 	<Tooltip type="menu" content={DropDownMenu} close={() => this.setState({active: false})} />
			    		: 	''
			    	}
			  	</div>
				<input type="text" className="form-control with-shadow border-0" ref={ref => this.query = ref} placeholder="Buscar por produtos e serviços" />
				<div className="input-group-append">
				    <BtnMain
				    	className="btn-search px-4 pt-2"
				    	type="submit"
				    	title={<i className="fa fa-search" aria-hidden="true"></i>} />
			  	</div>
			</form>
        )
    }
}

export default WebSearch