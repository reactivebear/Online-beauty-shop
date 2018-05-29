import React, { Component } from 'react'
import './checkbox.css'

class CheckBox extends Component {
	onChange = e => {
		this.props.onChange(e.target.checked)
	}

    render() {
    	const horizontalText = this.props.vertical ? <span>&nbsp;</span> : this.props.title
    	const verticalText = this.props.vertical ? this.props.title : ''
        return (
            <label className="checkbox">
                <input type="checkbox" defaultChecked={this.props.value} onChange={e => this.props.onChange(e)} ref={this.props.inputRef} />
                <div className="checkbox__text">{horizontalText}</div>
                <div className="text-center">{verticalText}</div>
            </label>
        );
    }
}

export default CheckBox