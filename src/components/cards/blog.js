import React, { Component } from 'react'

class BlogItem extends Component {
	render() {
		return (
			<div className="wrap-category-item">
				<div className="inner-category-item">
					<div>
						<img src={this.props.image_url} alt="" className="img-fluid mb-3" />
						<strong>{this.props.name}</strong>
					</div>
				</div>
			</div>
		)
	}
}

export default BlogItem