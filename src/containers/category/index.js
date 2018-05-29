import React, { Component } from 'react'
import SearchMenuWeb from 'components/menu/search_menu_web.js'
import store from 'store'
import { connect } from 'react-redux'
import { getProducts, getCategoryProducts } from 'actions/products.js'
import { getCategoryList, setCategory } from 'actions'
import CardProduct from 'components/cards/product.js'

class Category extends Component {
	componentWillMount() {
		store.dispatch(getCategoryList(this.props.match.params.type, this.props.match.params.id))
	}

	componentWillUnmount() {
		store.dispatch(setCategory({}, 'active_category'))
	}

	printList = (item, i) => {
		return <div key={i} className="col-sm-6"><CardProduct {...item} /></div>
	}

    render() {
    	const category = this.props.categories.active_category
    	const { list } = this.props.products
        return (
        	<div className="bg-main font-avenir py-4">
        		<div className="container">
        			<div className="row">
        				<div className="col-md-4">
	            			<SearchMenuWeb />
	            		</div>
	            		<div className="col-md-8">
	            			<h4>Pesquisa: {category.name}</h4>
	            			<div className="row">
	            				{ list.map((item, i) => this.printList(item, i)) }
            				</div>
	            		</div>
	            	</div>
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        categories: state.categories,
        products: {
        	list: state.products.list
        }
    })

export default connect(
    mapStateToProps
)(Category)