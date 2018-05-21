import React, { Component } from 'react'

class Counter extends Component {
	state = {
		count: 1,
	}

	increment = e => {
		e.preventDefault()
		this.setState({count: ++this.state.count})
		this.props.onChange(this.state.count)
	}

	decrement = e => {
		e.preventDefault()
		if (this.state.count > 1) {
			this.setState({count: --this.state.count})
			this.props.onChange(this.state.count)
		}
	}

    render() {
    	const color = this.state.count > 1 ? 'color-green pointer' : 'color-grey'
        return (
        	<div className="color-grey">
	        	<div>Quantidade:</div>
	        	<div className="rounded border d-flex align-items-center justify-content-between px-2">
		            <i className={"fas fa-minus " + color} onClick={this.decrement}></i>
		            <span>{this.state.count}</span>
		            <i className="fas fa-plus pointer color-green" onClick={this.increment}></i>
				</div>
			</div>
        );
    }
}

export default Counter