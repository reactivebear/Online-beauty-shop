import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import DropDown from 'components/buttons/dropdown.js'
import CollapsedMenu from 'components/blocks/collapsed_menu.js'
import Stars from 'components/stars'
import SmallCheckBox from 'components/inputs/small_checkbox.js'
import { DROP_LIST } from 'config'
import { setActiveCategory } from 'actions'

class SearchMenuWeb extends Component {
	getCategories = () => 
		this.props.categories[`${this.props.type}_list`].map((item, i) => 
			<div className="py-2 color-grey pointer pl-4" onClick={this.changeCategory(item)} key={i}>{item.name}</div>
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

    render() {

        return (
        	<div>
	            <h4>Organizar anúncios</h4>
	            <div className="mb-3">
        			<DropDown list={DROP_LIST} />
    			</div>
    			<CollapsedMenu title="Categoria" body={this.getCategories()} />
    			<CollapsedMenu title="Subcategoria" body={this.getCategories()} />
    			<CollapsedMenu title="Marca" body={this.getCategories()} />
    			<CollapsedMenu title="Estado" body={this.getCategories()} />
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
            service_list: state.categories.service_list
        }
    })

export default connect(
    mapStateToProps
)(SearchMenuWeb)