import React, { Component } from 'react'
import './style.css'

class Tooltip extends Component {

    render() {
        return (
            <div className="bg-white rounded position-absolute tooltip-wrap text-dark">
            	<h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Tooltip