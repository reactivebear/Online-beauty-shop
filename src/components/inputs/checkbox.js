import React, { Component } from 'react'
import style from './checkbox.css'

class CheckBox extends Component {
    render() {
        return (
            <label className="checkbox">
                <input type="checkbox" checked={this.props.checked} />
                <div className="checkbox__text">{this.props.title}</div>
            </label>
        );
    }
}

export default CheckBox