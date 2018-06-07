import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'
import './style.css'

class WebSearch extends Component {
	openDropDown = () => {

	}

    render() {
        return (
            <div className="input-group">
            	<div className="input-group-prepend">
				    <button type="button" onClick={this.openDropDown} className="btn btn-drop-search pl-3">
				    	Todos
				    	<i className="fas fa-chevron-down px-3"></i>
			    	</button>
			  	</div>
				<input type="text" className="form-control with-shadow border-0" placeholder="Buscar por produtos e serviços" />
				<div className="input-group-append">
				    <BtnMain
				    	className="btn-search px-4 pt-2"
				    	title={<i className="fa fa-search" aria-hidden="true"></i>} />
			  	</div>
			</div>
        )
    }
}

export default WebSearch