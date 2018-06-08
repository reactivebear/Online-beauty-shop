import React, { Component } from 'react'
import Stars from 'components/stars'

class CardTestimonial extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="text-center px-2">
				<div className="mb-2 fs-18">{this.props.reviewer}</div>
				<div className="mb-2 color-grey">
					<Stars active={this.props.rating} />
				</div>
				<div className="color-grey">
					{this.props.text}
				</div>
			</div>
		)
	}
}

export default CardTestimonial