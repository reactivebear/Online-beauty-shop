import React, { Component } from 'react'
import style from './input.css'

class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label>Text:</label>
                {
            		this.props.required
                	? 	<sup style={{color: '#70C49C'}}><small>&#9733;</small></sup>
                	: 	''
                }
                <input type="text" placeholder="text" className="form-control" />
            </div>
        );
    }
}

export default Input