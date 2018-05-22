import React, { Component } from 'react'

class Stars extends Component {
	state = {
		active: 0
	}

    getArray = () => Array.apply(null, Array(5))

    setStars = val => e => {
    	if (this.props.editable) {
    		this.setState({active: val * 1})
    		this.props.onChange(this.state.active)
    	}
    }

    componentDidMount() {
    	this.setState({active: this.props.active})
    }

    componentWillReceiveProps(nextProps) {
    	this.setState({active: nextProps.active})
    }

    render() {
        return (
        	<span style={{letterSpacing: 3}}>
            	{ 	
            		this.getArray().map((item, i) => {
            			const className = this.props.editable ? 'far fa-star pointer' : 'far fa-star'
            			return (
            				<i key={i} style={{color: this.state.active > i ? '#609D6D' : 'inherit'}} className={`${className} ${this.props.className}`} onClick={this.setStars(i + 1)}></i>
        				)
        				
            		}) 
        		}
        	</span>
        );
    }
}

export default Stars