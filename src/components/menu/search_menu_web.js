import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import CollapsedMenu from 'components/blocks/collapsed_menu.js'
import Stars from 'components/stars'
import SmallCheckBox from 'components/inputs/small_checkbox.js'
import { setActiveCategory } from 'actions'
import RangeSlider from 'components/inputs/range_slider'
import { getProducts } from 'actions/products.js'
import { getServices } from 'actions/services.js'

class SearchMenuWeb extends Component {
    state = {
        price: {
            min: 0,
            max: 1000
        }
    }
	getCategories = () => 
		this.props.categories[`${this.props.type}_list`].map((item, i) => 
			<div className="py-2 color-grey pointer pl-4" onClick={this.changeCategory(item)} key={i}>{item.name}</div>
		)

    getSubCategories = () => 
        this.props.categories.subcategories.map((item, i) => 
            <div className="py-2 color-grey pointer pl-4" key={i}>{item.name}</div>
        )

	getRatings = () => {
		const list = Array.apply(null, Array(5))
		return list.map((item, i) => 
			(<div className="py-2 color-grey" key={i}>
                <SmallCheckBox onChange={this.handleCheckbox(i+1)}/>
                <Stars wrapClass="pl-1" active={i+1} />
            </div>)
		).reverse()
	}

    handleCheckbox = stars => e => {
        console.log(e.target.checked)
        console.log(stars)
    }

    changeCategory = category => e => {
        const [, seg1, seg2] = history.location.pathname.split('/')
        history.push(`/${seg1}/${seg2}/${category.id}`)
        store.dispatch(setActiveCategory(category))
    }

    getRangeSlider = () => {
        return  <div className="pl-4 py-2">
                    <div className="rounded border mb-2 color-grey px-2 py-1 d-inline-block">
                        R$ {this.state.price.min}
                        <sup><small>,00</small></sup> - 
                        R$ {this.state.price.max}
                        <sup><small>,00</small></sup>
                    </div>
                    <RangeSlider onChange={this.changeRange} onComplete={this.rangeComplete} value={this.state.price} min={0} max={1000} />
                </div>
    }

    rangeComplete = () => {
        this.getData(this.props.type, this.props.catId, {min_price: this.state.price.min, max_price: this.state.price.max})
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
            price: {
                min: value.min,
                max: value.max
            }
        })
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
                <CollapsedMenu title="Avaliação do produto" body={this.getRatings()} />
    			<CollapsedMenu title="Avaliação do vendedor" body={this.getRatings()} />
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
        }
    })

export default connect(
    mapStateToProps
)(SearchMenuWeb)