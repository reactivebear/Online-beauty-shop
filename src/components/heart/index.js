import React, { Component } from 'react'

class Heart extends Component {
	state = {
		active: this.props.active
	}
	toggleWish = e => {
		e.stopPropagation()
		this.setState({active: !this.state.active})
		this.props.onChange(!this.state.active)
	}

    render() {
    	const activeClass = this.state.active ? 'color-green' : 'color-grey'
        return (
            <i className={`far fa-heart fs-22 pointer ${activeClass}`} onClick={this.toggleWish}></i>
        );
    }
}

export default Heart