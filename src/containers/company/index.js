import React, { Component } from 'react'

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