import React, { Component } from 'react'

class CardBlog extends Component {
	render() {
		let padding
		if (this.props.first) {
			padding = 'pr-2 pl-1'
		} else if (this.props.last) {
			padding = 'pl-2 pr-1'
		} else {
			padding = 'px-2'
		}

		return (
				<div className="px-2">
					<div className="bg-white rounded">
						<img src={this.props.img} alt="" className="img-fluid mb-1 rounded-top" />
						<div className="p-3">
							<div className="color-green mb-1">{this.props.tags}</div>
							<div className="fs-16 mb-1">{this.props.text}</div>
							<div className="color-grey">{this.props.desc}</div>
							<div className="color-grey">{this.props.date}</div>
						</div>
					</div>
				</div>
		)
	}
}

export default CardBlog