import React, { Component } from 'react'
import './btn_main.css'

class BtnMain extends Component {
    render() {
        return (
            <button 
                type="button" 
                onClick={this.props.onClick}
                className={"btn btn-primary " + this.props.className}
                disabled={this.props.disabled}>
                {this.props.title}
            </button>    
        );
    }
}

export default BtnMain