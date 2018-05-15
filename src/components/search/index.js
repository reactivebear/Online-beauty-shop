import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'

class Search extends Component {

    render() {
        return (
            <div className="input-group">
				<div className="input-group-prepend">
					<button className="btn btn-default" type="button">Todos &nbsp;<i className="fas fa-chevron-down" style={{verticalAlign: 'middle'}}></i></button>
				</div>
				<input type="text" className="form-control" aria-label="Text input with dropdown button" />
				<div className="input-group-append">
				    <BtnMain
				    	title={<i className="fas fa-search"></i>} />
			  	</div>
			</div>
        )
    }
}

export default Search