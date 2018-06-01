import React, { Component } from 'react'
import store from 'store'
import { getWishlist } from 'actions/user'
import BtnGroup from 'components/buttons/btn_group.js'

class Wishlist extends Component {
	state = {
		firstClass: 'order-1',
		lastClass: 'order-6',
		active: 'product'
	}

	componentWillMount() {
		store.dispatch(getWishlist(this.state.active))
	}

	toggleCat = item => e => {
		switch (item) {
			case 'service':
				this.setState({
					firstClass: 'order-6',
					lastClass: 'order-1',
					active: item
				})
				store.dispatch(getWishlist(item))
				break
			case 'product':
				this.setState({
					firstClass: 'order-1',
					lastClass: 'order-6',
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
				onClick: this.toggleCat('product'),
				active: this.state.active === 'product'
			}, {
				title: 'Serviços', 
				onClick: this.toggleCat('service'),
				active: this.state.active === 'service'
			}
		]

        return (
        	<div>
        		<div className="row">
    				<div className="col-sm-4 offset-sm-4">
	        			<div className="text-center form-group">
				            <BtnGroup
				            	buttons={catButtons} />
		            	</div>
	            	</div>
            	</div>
            	<div className="row">
	            	<div className={'col-sm-12 ' + this.state.firstClass}>
		            	
            		</div>
            		<div className={'col-sm-12 ' + this.state.lastClass}>
	            		
            		</div>
            		
	            </div>
        	</div>
    	)
    }
}

export default Wishlist