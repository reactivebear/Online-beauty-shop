import React, { Component } from 'react'
import './category.css'

class CategoryItem extends Component {
	render() {
		return (
			<div className="wrap-category-item">
				<div className="inner-category-item">
					<div>
						<img src={this.props.image_url} alt="" className="img-fluid mb-3" />
						<strong>{this.props.name}</strong>
					</div>
					<img className="category-arrow" src="assets/icons/icons8-right-50.png" />
				</div>
			</div>
		)
	}
}

export default CategoryItem