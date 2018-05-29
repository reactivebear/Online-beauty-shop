import React, { Component } from 'react'
import { history } from 'store'
import './category.css'

class CategoryItem extends Component {
	goToCategory = () => {
		history.push(`category/${this.props.type}/${this.props.id}`)
	}

	render() {
		return (
			<div className="wrap-category-item">
				<div className="inner-category-item">
					<div>
						<img src={this.props.image_url} alt="" className="img-fluid mb-3" />
						<strong>{this.props.name}</strong>
					</div>
					<img className="category-arrow pointer" onClick={this.goToCategory} src="assets/icons/icons8-right-50.png" alt="" />
				</div>
			</div>
		)
	}
}

export default CategoryItem