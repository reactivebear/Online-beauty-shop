import React, { Component } from 'react'
import store, { history } from 'store'
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

	componentWillMount() {
		store.dispatch(getCategories())
		if (this.props.location.state && this.props.location.state.active) {
			this.setState({
					firstClass: 'order-6',
					lastClass: 'order-1',
					active: this.props.location.state.active
				})
			history.push('/', {})
		}
	}

    render() {
    	console.log(this.props.location.state)
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

		const style = {
			maxHeight: 350,
			backgroundImage: 'url(/assets/images/banner.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover'
		}

    	const carouselItems = [
    		<div style={style}>
    			<img style={{width: '100%', opacity: 0}} src="/assets/images/banner.jpg" alt="" />
			</div>,
			<div style={style}>
    			<img style={{width: '100%', opacity: 0}} src="/assets/images/banner.jpg" alt="" />
			</div>,
			<div style={style}>
    			<img style={{width: '100%', opacity: 0}} src="/assets/images/banner.jpg" alt="" />
			</div>
		]
		
        return (
        	<div className="bg-main overflow-x">
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