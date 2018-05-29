import React, { Component } from 'react'
import './input.css'

class Input extends Component {
    
    render() {
        const { 
            placeholder = '',
            disabled = false,
            type = 'text',
            onChange,
            inputRef,
            className = '',
            value 
        } = this.props

        return (
                <div id="first" className="form-group">
                    <label>{this.props.label}:</label>
                    {
                        this.props.required
                        ?   <sup style={{color: '#70C49C'}}><small>&#9733;</small></sup>
                        :   ''
                    }{
                        this.props.description
                        ?   <span style={{color: '#70C49C'}}> ({this.props.description})</span>
                        :   ''
                    }
                    <input 
                        type={type}
                        disabled={disabled}
                        placeholder={placeholder}
                        className={`form-control${ className}`}
                        ref={inputRef}
                        onChange={onChange}
                        defaultValue={value} />
                </div>
        );
    }
}

export default Input