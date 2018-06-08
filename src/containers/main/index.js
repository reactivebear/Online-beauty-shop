import React, { Component } from 'react'
import store from 'store'
import { getCategories } from 'actions'
import BtnGroup from 'components/buttons/btn_group.js'
import { connect } from 'react-redux'
import Carousel from 'components/carousel'
import MainSection from 'components/sections/main.js'
import BlogSection from 'components/sections/blog.js'
import TestimonialsSection from 'components/sections/testimonials.js'

class Main extends Component {
	state = {
		firstClass: 'order-1',
		lastClass: 'order-6',
		active: 'product'
	}

	toggleCat = item => e => {
		switch (item) {
			case 'service':
				this.setState({
					firstClass: 'order-6',
					lastClass: 'order-1',
					active: 'service'
				})
				break
			case 'product':
				this.setState({
					firstClass: 'order-1',
					lastClass: 'order-6',
					active: 'product'
				})
				break
			default: return
		}
	}

	isEmptyCategories = categories => (! categories.service.length || ! categories.product.length)

	componentDidMount() {
		if (this.isEmptyCategories(this.props.categories)) {
			store.dispatch(getCategories())
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.isEmptyCategories(nextProps.categories)) {
			store.dispatch(getCategories())
		}
	}

    render() {
    	const { product, service } = this.props.categories

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

    	const carouselItems = [
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/banner.png" alt="" />, 
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/banner.png" alt="" />, 
    		<img style={{width: '100%', maxHeight: 350}} src="/assets/images/banner.png" alt="" />
		]
		
        return (
        	<div className="bg-main">
        		<div className="form-group position-relative z-index-1">
        			<Carousel items={carouselItems} />
    			</div>
    			<div className="effect5 mb-3 position-relative z-index-0">
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
			            		type="product"
			            		categories={product} />
	            		</div>
	            		<div className={'col-sm-12 ' + this.state.lastClass}>
		            		<MainSection
			            		title="serviços"
			            		type="service"
			            		categories={service} />
	            		</div>
	            		<div className="col-sm-12 order-11">
	            			<BlogSection />
	            		</div>
	            		<div className="col-sm-12 order-12">
	            			<TestimonialsSection />
	            		</div>
		            </div>
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        categories: {
        	product: state.categories.product,
        	service: state.categories.service,
        }
    })

export default connect(
    mapStateToProps
)(Main)