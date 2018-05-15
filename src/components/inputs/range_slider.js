import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import style from './range_slider.css'

class RangeSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: { min: 2, max: 10 },
		};
	}

	render() {
		return (
			<InputRange
				maxValue={100}
				minValue={0}
				value={this.state.value}
				formatLabel={value => `${value} kg`}
				onChange={value => this.setState({ value })} />
		);
	}
}

export default RangeSlider