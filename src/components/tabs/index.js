import React, { Component } from 'react'
import './style.css'

class Tabs extends Component {
	state = {
		active: 1
	}

	toggleTab = index => e => {
		this.setState({active: index + 1})
	}

	printLink = (item, i) => {
		const className =  i + 1 === this.state.active ? 'nav-link active' : 'nav-link'
		return 	<li key={i} className="nav-item">
					<span className={`${className} pointer`} id="home-tab" onClick={this.toggleTab(i)}>{item.title}</span>
				</li>
	}

	printContent = (item, i) => {
		const className = i + 1 === this.state.active ? 'tab-pane fade show active' : 'tab-pane fade'
		return <div key={i} className={className} id="home">{item.content}</div>
	}

    render() {
        return (
        	<div>
	            <ul style={this.props.styleHeader} className={`nav nav-tabs d-none d-sm-flex fs-16 font-weight-bold ${this.props.classNameHeader}`}>
	            	{ this.props.tabs.map((item, i) => this.printLink(item, i)) }
				</ul>

				<div className={`bg-main pb-4 d-sm-none ${this.props.classNameContent}`}>
					<nav className="nav nav-pills flex-column d-sm-none text-center border-green rounded bg-main">
						{ this.props.tabs.map((item, i) => this.printLink(item, i)) }
					</nav>
				</div>

				<div className={`tab-content rounded ${this.props.classNameContent}`}>
					{ this.props.tabs.map((item, i) => this.printContent(item, i)) }
				</div>
			</div>
        );
    }
}

export default Tabs