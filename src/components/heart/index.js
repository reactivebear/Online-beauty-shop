import React, { Component } from 'react'

class Heart extends Component {
	state = {
			active: this.props.active
		}

	toggleWish = e => {
		e.stopPropagation()
		this.setState({active: !this.state.active}, () => {
			this.props.onChange(this.state.active)
		})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.active != undefined && nextProps.active !== this.props.active) {
			this.setState({active: nextProps.active})
		}
	}

    render() {
    	const activeClass = this.state.active ? 'fas' : 'far'
        return (
            <i className={`${activeClass} fa-heart fs-22 pointer color-green`} onClick={this.toggleWish}></i>
        );
    }
}

export default Heart