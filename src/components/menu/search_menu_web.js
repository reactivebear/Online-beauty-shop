import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import CollapsedMenu from 'components/blocks/collapsed_menu'
import Stars from 'components/stars'
import { setActiveCategory, setFilters } from 'actions'
import RangeSlider from 'components/inputs/range_slider'
import { getProducts } from 'actions/products'
import { getServices } from 'actions/services'
import SmallSwitch from 'components/inputs/small_switch'

let initialState = {}

class SearchMenuWeb extends Component {
    state = {
        min_price: 0,
        max_price: 5000,
        min_rating: 0,
        min_vendor_rating: 0
    }

	getCategories = () => 
		this.props.categories[`${this.props.type}_list`].map((item, i) => 
			<div className="py-1 color-grey pointer pl-4" onClick={this.changeCategory(item)} key={i}>{item.name}</div>
		)

    getSubCategories = () => 
        this.props.categories.subcategories.map((item, i) => 
            <div className="py-2 color-grey pointer pl-4" key={i}>{item.name}</div>
        )

	getRatings = type => {
		const list = Array.apply(null, Array(5))
        const func = type === 'min_rating' ? this.productsFilter : this.vendorFilter
		return list.map((item, i) => 
			(<div className="py-2 color-grey" key={i}>
                <SmallSwitch
                    className="d-inline-block"
                    onChange={func} 
                    value={i+1}
                    checked={this.state[type]} />
                <Stars wrapClass="pl-1" active={i+1} />
            </div>)
		).reverse()
	}

    getParam = param => {
        const temp = Object.assign({}, this.state)
        Object.keys(param).forEach(item => {
            temp[item] = param[item]
        })
        return temp
    }

    productsFilter = val => {
        this.setState({min_rating: val})
        this.getData(this.props.type, this.props.catId, this.getParam({min_rating: val}))
        store.dispatch(setFilters({min_rating: val}))
    }

    vendorFilter = val => {
        this.setState({min_vendor_rating: val})
        this.getData(this.props.type, this.props.catId, this.getParam({min_vendor_rating: val}))
        store.dispatch(setFilters({min_vendor_rating: val}))
    }

    changeCategory = category => e => {
        const [, seg1, seg2] = history.location.pathname.split('/')
        history.push(`/${seg1}/${seg2}/${category.id}`)
        store.dispatch(setActiveCategory(category))
    }

    getRangeSlider = () => {
        return  <div className="pl-4 py-2">
                    <div className="rounded border mb-2 color-grey px-2 py-1 d-inline-block">
                        R$ {this.state.min_price}
                        <sup><small>,00</small></sup> - 
                        R$ {this.state.max_price}
                        <sup><small>,00</small></sup>
                    </div>
                    <RangeSlider onChange={this.changeRange} onComplete={this.rangeComplete} value={{min: this.state.min_price, max: this.state.max_price}} min={0} max={5000} />
                </div>
    }

    rangeComplete = () => {
        this.getData(this.props.type, this.props.catId, this.getParam({min_price: this.state.min_price, max_price: this.state.max_price}))
        store.dispatch(setFilters({min_price: this.state.min_price, max_price: this.state.max_price}))
    }

    getData = (type, id, param) => {
        switch(type) {
            case 'product':
                store.dispatch(getProducts('pagination', {category: id, new_pagination: true, page_size: 14, ...param}))
                break
            case 'service':
                store.dispatch(getServices('pagination', {category: id, new_pagination: true, page_size: 14, ...param}))
                break
            default: return
        }
    }

    changeRange = value => {
        this.setState({
            min_price: value.min,
            max_price: value.max
        })
    }

    componentWillMount() {
        initialState = this.state
    }

    componentWillUnmount() {
        store.dispatch(setFilters(initialState))
    }

    render() {
        return (
        	<div>
	            <h4>Organizar anúncios</h4>
                <CollapsedMenu title="Faixa de preço" body={this.getRangeSlider()} />
    			<CollapsedMenu title="Categoria" body={this.getCategories()} />
                <CollapsedMenu title="Subcategoria" body={this.getSubCategories()} />
    			<CollapsedMenu title="Marca" body={<span></span>} />
    			<CollapsedMenu title="Estado" body={<span></span>} />
    			<CollapsedMenu title="Provedor do serviço" body={<span></span>} />
                <CollapsedMenu title="Promoção" body={<span></span>} />
                <CollapsedMenu title="Avaliação do produto" body={this.getRatings('min_rating')} />
    			<CollapsedMenu title="Avaliação do vendedor" body={this.getRatings('min_vendor_rating')} />
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        categories: {
            product_list: state.categories.product_list,
            service_list: state.categories.service_list,
            subcategories: state.categories.subcategories
        },
        search: {
            filters: state.search.filters
        }
    })

export default connect(
    mapStateToProps
)(SearchMenuWeb)