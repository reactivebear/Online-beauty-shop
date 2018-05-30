import React, { Component } from 'react'

class Pagination extends Component {
	state = {
		active: this.props.active
	}

	printButtons = (item, i) => {
		const activeClass = this.state.active === i+1 ? 'color-green' : 'color-grey'
		return 	<div key={i} className={`rounded bg-white p-2 px-3 mx-1 border pointer ${activeClass}`} onClick={this.setPage(i+1)}>
	            	{i+1}
	            </div>
	}

	setPage = active => e => {
		this.setState({active})
		this.props.onChange(active)
	}

	prevPage = () => {
		if (this.state.active > 1) {
			this.setState({active: this.state.active - 1})
			this.props.onChange(this.state.active - 1)
		}
	}

	nextPage = () => {
		if (this.state.active < this.props.total) {
			this.setState({active: this.state.active + 1})
			this.props.onChange(this.state.active + 1)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.active != this.props.active) {
			this.setState({active: nextProps.active})
		}
	}

    render() {
    	const list = Array.apply(null, Array(this.props.total))
    	const prevClass = this.state.active > 1 ? 'pointer color-green' : 'color-grey'
    	const nextClass = this.state.active < this.props.total ? 'pointer color-green' : 'color-grey'

        return (
        	<div className="d-flex justify-content-center">
	            <div className={`rounded bg-white py-2 px-3 mx-1 border ${prevClass}`} onClick={this.prevPage}>
	            	<i className="fas fa-chevron-left"></i>
	            </div>
	            { list.map((item, i) => this.printButtons(item, i)) }
	            <div className={`rounded bg-white py-2 px-3 mx-1 border ${nextClass}`} onClick={this.nextPage}>
	            	<i className="fas fa-chevron-right"></i>
	            </div>
			</div>
        );
    }
}

export default Pagination