import React, { Component } from 'react'

class Pagination extends Component {
	

	constructor(props) {
		super(props)
		this.state = {
			active: props.active,
		}
		this.list = ['']
		this.container = null
	}

	printButtons = (item, i) => {
		const activeClass = this.state.active === i+1 ? 'color-green' : 'color-grey'
		return 	<div key={i} ref={ref => this.list[i] = ref} className={`rounded bg-white p-2 px-3 mx-1 border pointer ${activeClass}`} onClick={this.setPage(i+1)}>
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

	componentDidMount() {
		setTimeout(() => {
			console.log(this.container.offsetWidth)
		}, 500)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.active !== this.props.active) {
			this.setState({active: nextProps.active})
		}
	}

    render() {
    	const list = Array.apply(null, Array(this.props.total))
    	const prevClass = this.state.active > 1 ? 'pointer color-green' : 'color-grey'
    	const nextClass = this.state.active < this.props.total ? 'pointer color-green' : 'color-grey'
        return (
        	<div ref={ref => this.container = ref} style={{minHeight: 1}}>
	        	<div className="d-flex justify-content-center">
		            <div className={`rounded bg-white py-2 px-3 mx-1 border ${prevClass}`} ref={ref => this.prev = ref} onClick={this.prevPage}>
		            	<i className="fas fa-chevron-left"></i>
		            </div>
		            	{ list.map((item, i) => this.printButtons(item, i)) }
		            <div className={`rounded bg-white py-2 px-3 mx-1 border ${nextClass}`} ref={ref => this.next = ref} onClick={this.nextPage}>
		            	<i className="fas fa-chevron-right"></i>
		            </div>
				</div>
			</div>
        );
    }
}

export default Pagination