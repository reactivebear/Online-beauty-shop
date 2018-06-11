import React, { Component } from 'react'


class Select extends Component {

    handleChange = e => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}
	
	printOptions(item, i) {
		return (
			<option key={i} value={item.key ? item.key : i}>
				{item.value ? item.value : item}
			</option>
		)
	}
    
    render() {
        const { disabled, onChange, className, options, selected, label } = this.props;
        return (
        	<div className="form-group">
        		<label>{label}</label>
                    {
                        this.props.required
                        ?   <sup style={{color: '#70C49C'}}><small>&#9733;</small></sup>
                        :   ''
                    }{
                        this.props.description
                        ?   <span style={{color: '#70C49C'}}> ({this.props.description})</span>
                        :   ''
                    }
				<select
					disabled={disabled}
					className={`form-control ${className}`}
					defaultValue={selected}
					onChange={e => { this.handleChange(e) }} >
	                	{ options.map((item, i) => this.printOptions(item, i)) }
	            </select>
            </div>
        );
    }
}

export default Select