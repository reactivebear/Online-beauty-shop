import React, { Component } from 'react'
import './btn_main.css'

class BtnMain extends Component {

    render() {
        const { type = 'button' } = this.props
        return (
            <button 
                type={type}
                onClick={this.props.onClick}
                className={"btn btn-primary " + this.props.className}
                disabled={this.props.disabled}>
                {this.props.title}
            </button>    
        );
    }
}

export default BtnMain