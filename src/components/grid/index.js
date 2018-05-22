import React, { Component } from 'react'



class Grid extends Component {
	printList = (item, i) => {
		console.log(this.props)
		return <div key={i} className="col-sm-4 mb-2">{this.props.item}</div>
	}

 	render() {
        return (
        	<div className="row">
        		{ this.props.list.map((item, i) => this.printList(item, i)) }
        	</div>
    	)
	}
}

export default Grid