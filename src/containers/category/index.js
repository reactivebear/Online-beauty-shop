import React, { Component } from 'react'
import SearchMenuWeb from 'components/menu/search_menu_web.js'
import OrderMenu from 'components/menu/order_menu.js'
import store from 'store'
import { connect } from 'react-redux'
import { getProducts } from 'actions/products.js'
import { getServices } from 'actions/services.js'
import { getCategoryList, setCategory } from 'actions'
import { toggleLeftMenu } from 'actions/design.js'
import CardProduct from 'components/cards/product.js'
import CardService from 'components/cards/service.js'
import Pagination from 'components/pagination'

class Category extends Component {
	componentWillMount() {
		store.dispatch(getCategoryList(this.props.match.params.type, this.props.match.params.id)).then(res => {
			this.getData(this.props.match.params.type, this.props.match.params.id, 1)
		})
	}
	
	componentWillUnmount() {
		store.dispatch(setCategory({}, 'active_category'))
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories.active_category.id !== this.props.categories.active_category.id) {
            this.getData(this.props.match.params.type, nextProps.categories.active_category.id, 1)
        }
    }

	printList = (item, i) => {
		const card = this.props.match.params.type === 'product' ? <CardProduct {...item} /> : <CardService {...item} />
		return <div key={i} className="col-sm-6">{card}</div>
	}

	getData = (type, id, page) => {
		switch(type) {
            case 'product':
                store.dispatch(getProducts('pagination', {category: id, new_pagination: true, page_size: 14, page: page}))
                break
            case 'service':
                store.dispatch(getServices('pagination', {category: id, new_pagination: true, page_size: 14, page: page}))
                break
            default: return
        }
	}

	changePage = page => {
		this.getData(this.props.match.params.type, this.props.match.params.id, page)
	}

    showMenu = body => e => {
        const content = body === 'filter' ? <SearchMenuWeb type={this.props.match.params.type} /> : <OrderMenu />
        store.dispatch(toggleLeftMenu(true, content))
    }

    render() {
    	const category = this.props.categories.active_category || {}
    	const { items } = this.props[this.props.match.params.type].pagination
        return (
        	<div className="bg-main font-avenir py-4">
        		<div className="container">
        			<div className="row">
        				<div className="col-md-4 d-none d-sm-block">
                            <div className="rounded bg-white border py-4 px-2">
	            			    <SearchMenuWeb type={this.props.match.params.type} />
                            </div>
	            		</div>
	            		<div className="col-md-8">
	            			<h4><small>Pesquisa: </small>{category.name}</h4>
                            <div className="mb-3 d-sm-none">
                                <span className="color-green mr-2 pointer" onClick={this.showMenu('order')}>
                                    <img src="/assets/icons/order-icon.png" alt="" className="img-fluid small-icon" />
                                    &nbsp;
                                    Ordenar
                                </span>
                                <span className="color-green pointer" onClick={this.showMenu('filter')}>
                                    <img src="/assets/icons/setup-icon.png" alt="" className="img-fluid small-icon" />
                                    &nbsp;
                                    Filtrar
                                </span>
                            </div>
	            			<div className="row">
	            				{ items.map((item, i) => this.printList(item, i)) }
            				</div>
            				<div>
            					<Pagination 
            						onChange={this.changePage} 
            						total={this.props[this.props.match.params.type].pagination.total_pages} 
            						active={this.props[this.props.match.params.type].pagination.page} />
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
        product: {
            pagination: state.products.pagination
        },
        service: {
        	pagination: state.services.pagination
        }
    })

export default connect(
    mapStateToProps
)(Category)