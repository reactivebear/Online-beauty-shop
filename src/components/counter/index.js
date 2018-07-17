import React, { Component } from 'react'
import { format } from 'utils/mask'

class Counter extends Component {
	state = {
		count: 1,
	}

	step = this.props.step || 1

	increment = e => {
		e.preventDefault()
		this.setState({count: this.state.count + this.step})
		this.props.onChange(this.state.count + this.step)
	}

	decrement = e => {
		e.preventDefault()
		if (this.state.count > 1) {
			this.setState({count: this.state.count - this.step})
			this.props.onChange(this.state.count - this.step)
		}
	}

	componentDidMount() {
    	this.setState({count: this.props.value})
    }

    componentWillReceiveProps(nextProps) {
    	this.setState({count: nextProps.value})
    }
    
    onChange = e => {
    	const count = format('digits', e.target.value) * 1
    	this.setState({count})
    	this.props.onChange(count)
    }

    render() {
    	const color = this.state.count > 1 ? 'color-green pointer' : 'color-grey'
        return (
        	<div className={`color-grey ${this.props.className}`}>
	        	{
	        		this.props.hideDescription
	        		?	''
	        		: 	<div>Quantidade:</div>
	        	}
	        	<div className="rounded border d-flex align-items-center justify-content-between px-2">
		            <i className={"fas fa-minus " + color} onClick={this.decrement}></i>
		            <input value={this.state.count} className="counter-input" onChange={this.onChange} />
		            <i className="fas fa-plus pointer color-green" onClick={this.increment}></i>
				</div>
			</div>
        );
    }
}

export default Counter