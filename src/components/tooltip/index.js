import React, { Component } from 'react'
import './style.css'

class Tooltip extends Component {

    render() {
        return (
            <div id="child" className="bg-white rounded position-absolute tooltip-wrap text-dark p-3 cursor-default" onClick={e => e.stopPropagation()}>
            	<p>{this.props.title}</p>
            	<div>{React.createElement(this.props.content, [this.props.close])}</div>
            </div>
        );
    }
}

export default Tooltip