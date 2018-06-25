import React, { Component } from 'react'
import { history } from 'store'
import './category.css'

class CategoryItem extends Component {
	goToCategory = () => {
		history.push(`category/${this.props.type}/${this.props.id}`)
	}

	render() {
		return (
			<div className="wrap-category-item pointer" onClick={this.goToCategory}>
				<div className="inner-category-item">
					<div className="d-flex flex-column" style={{height: 100}}>
						<img src={this.props.image_url} alt="" className="img-fluid w-65" />
						<div className="mt-auto"><strong>{this.props.name}</strong></div>
					</div>
					<img className="category-arrow" src="assets/icons/icons8-right-50.png" alt="" />
				</div>
			</div>
		)
	}
}

export default CategoryItem