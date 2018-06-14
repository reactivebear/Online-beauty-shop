import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getWishlist } from 'actions/user'
import BtnGroup from 'components/buttons/btn_group.js'
import CardProduct from 'components/cards/product.js'
import CardService from 'components/cards/service.js'

class Wishlist extends Component {
	state = {
		active: 'products'
	}

	componentWillMount() {
		store.dispatch(getWishlist(this.state.active))
	}

	printList = (item, i) =>
		(<div key={i} className="col-lg-6 mb-3">
			{ this.state.active === 'products' ? <CardProduct {...item.product} wishlist={true} /> : <CardService {...item.service} wishlist={true} /> }
		</div>)

	toggleCat = item => e => {
		switch (item) {
			case 'services':
				this.setState({
					active: item
				})
				store.dispatch(getWishlist(item))
				break
			case 'products':
				this.setState({
					active: item
				})
				store.dispatch(getWishlist(item))
				break
			default: return
		}
	}

	render() {
		const catButtons = [
    		{
				title: 'Produtos', 
				onClick: this.toggleCat('products'),
				active: this.state.active === 'products'
			}, {
				title: 'Serviços', 
				onClick: this.toggleCat('services'),
				active: this.state.active === 'services'
			}
		]

		const list = this.props.user.wishlist[this.state.active] || []
        return (
        	<div>
	    		<div className="row">
					<div className="col-lg-4 col-md-8 offset-md-2 offset-lg-4">
	        			<div className="text-center form-group">
				            <BtnGroup
				            	buttons={catButtons} />
		            	</div>
	            	</div>
	        	</div>
	        	<div className="row">
	        		{ list.map((item, i) => this.printList(item, i)) }
	            </div>
	        </div>
    	)
    }
}

const mapStateToProps = state => 
	({
        user: {
        	wishlist:  state.user.wishlist
        }
    })

export default connect(
    mapStateToProps
)(Wishlist)