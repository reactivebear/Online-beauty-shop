import React, { Component } from 'react'
import store from 'store'
import { getCompany } from 'actions'

class Company extends Component {
	componentWillMount() {
		console.log(this.props.match.params.id)
	}

    render() {
        return (
        	<div>
	            <h1>Company</h1>
			</div>
        );
    }
}

export default Company