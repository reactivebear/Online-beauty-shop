import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropDown from 'components/buttons/dropdown.js'
import CollapsedMenu from 'components/blocks/collapsed_menu.js'
import Stars from 'components/stars'

class SearchMenuWeb extends Component {
	getCategories = () => 
		this.props.categories.product_list.map((item, i) => 
			<div className="py-2 color-grey pointer" key={i}>{item.name}</div>
		)

	getRatings = () => {
		const list = Array.apply(null, Array(5))
		return list.map((item, i) => 
			<div className="py-2 color-grey" key={i}><Stars active={i+1} /></div>
		).reverse()
	}

    render() {
    	const dropList = ['Mais relevantes', 'Menor preço', 'Maior preço']

        return (
        	<div className="rounded bg-white border pt-4 px-2">
	            <h4>Organizar anúncios</h4>
	            <div className="mb-3">
        			<DropDown list={dropList} />
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
        categories: state.categories,
    })

export default connect(
    mapStateToProps
)(SearchMenuWeb)