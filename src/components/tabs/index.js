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
					<a className={className} id="home-tab" href="javascript:;" onClick={this.toggleTab(i)}>{item.title}</a>
				</li>
	}

	printContent = (item, i) => {
		const className = i + 1 === this.state.active ? 'tab-pane fade show active' : 'tab-pane fade'
		return <div key={i} className={className} id="home">{item.content}</div>
	}

    render() {
        return (
        	<div>
	            <ul className="nav nav-tabs">
	            	{ this.props.tabs.map((item, i) => this.printLink(item, i)) }
				</ul>

				<div className="tab-content p-3">
					{ this.props.tabs.map((item, i) => this.printContent(item, i)) }
				</div>
			</div>
        );
    }
}

export default Tabs