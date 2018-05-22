import React, { Component } from 'react'
import store from 'store'
import { getCategories, setActiveCategory } from 'actions'
import CardService from 'components/cards/service.js'
import BtnGroup from 'components/buttons/btn_group.js'
import { connect } from 'react-redux'
import Carousel from 'components/carousel'
import MainSection from 'components/sections/main.js'
import BlogSection from 'components/sections/blog.js'

class Main extends Component {
	state = {
		firstClass: 'order-1',
		lastClass: 'order-6'
	}

	toggleCat = item => e => {
		switch (item) {
			case 'service':
				this.setState({
					firstClass: 'order-6',
					lastClass: 'order-1'
				})
				break
			case 'product':
				this.setState({
					firstClass: 'order-1',
					lastClass: 'order-6'
				})
				break
		}
		store.dispatch(setActiveCategory(item))
	}

	isEmptyCategories = categories => (! categories.service.length || ! categories.product.length)

	componentDidMount() {
		if (this.props.user.token && this.isEmptyCategories(this.props.categories)) {
			store.dispatch(getCategories())
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.token && this.isEmptyCategories(nextProps.categories)) {
			store.dispatch(getCategories())
		}
	}

    render() {
    	const { product, service, active } = this.props.categories

    	const catButtons = [
    		{
				title: 'Produtos', 
				onClick: this.toggleCat('product'),
				active: this.props.categories.active === 'product'
			}, {
				title: 'Serviços', 
				onClick: this.toggleCat('service'),
				active: this.props.categories.active === 'service'
			}
		]

    	const carouselItems = [
    		<img style={{width: '100%', minHeight: 175}} src="/assets/images/banner.png" alt="" />, 
    		<img style={{width: '100%', minHeight: 175}} src="/assets/images/banner.png" alt="" />, 
    		<img style={{width: '100%', minHeight: 175}} src="/assets/images/banner.png" aly="" />
		]
		
        return (
        	<div className="bg-main">
        		<div className="form-group">
        			<Carousel items={carouselItems} />
    			</div>
        		<div className="container">
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
			            	<MainSection
			            		title="produtos"
			            		type="products"
			            		categories={product} />
	            		</div>
	            		<div className={'col-sm-12 ' + this.state.lastClass}>
		            		<MainSection
			            		title="serviços"
			            		type="services"
			            		categories={service} />
	            		</div>
	            		<div className="col-sm-12 order-12">
	            			<BlogSection />
	            		</div>
		            </div>
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: {
            token: state.user.token
        },
        categories: {
        	product: state.categories.product,
        	service: state.categories.service,
        	active: state.categories.active
        }
    }
}

export default connect(
    mapStateToProps
)(Main)