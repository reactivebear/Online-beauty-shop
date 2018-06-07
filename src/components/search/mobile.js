import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'
import './style.css'

class MobileSearch extends Component {

    render() {
        return (
            <div className="input-group">
				<input type="text" className="form-control" />
				<div className="input-group-append">
				    <BtnMain
				    	className="btn-search"
				    	title={<i className="fa fa-search" aria-hidden="true"></i>} />
			  	</div>
			</div>
        )
    }
}

export default MobileSearch