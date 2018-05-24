import React, { Component } from 'react'
import store, { history } from 'store'
import { connect } from 'react-redux'
import { getProduct } from 'actions/products.js'
import { addToCart } from 'actions/cart.js'
import { getCategories, toggleModal } from 'actions'
import ImageMultiPreview from 'components/images/multi_preview.js'
import ImagePreview from 'components/images/preview.js'
import Price from 'components/price'
import Stars from 'components/stars'
import Counter from 'components/counter'
import BtnMain from 'components/buttons/btn_main.js'
import Tabs from 'components/tabs'
import SalonInfo from 'components/blocks/salon_info.js'
import MainList from 'components/lists/main.js'
import Accordion from 'components/accordion'
import { CommentForm } from 'components/forms'

class Product extends Component {
	constructor(props) {
		super(props)
		if (props.match.params.id) {
			store.dispatch(getProduct(props.match.params.id))
		}
		this.count = 1
		store.dispatch(getCategories('service'))
	}

	getReviewList = () => {
		return 	<div>
					{
						this.props.products.salon.reviews.map((item, i) => {
							return 	<div key={i}>
										<div className="d-flex">
											<div className="w-15 px-2">
												<img src="/assets/images/default-reviewer.png" className="img-fluid" alt="" />
											</div>
											<div className="w-85">
												<div className="d-flex justify-content-between">
													<h5>{ item.reviewer.username }</h5>
													<div><Stars active={item.rating} /></div>
												</div>
												<div>
													<span className="color-grey">{ item.comment }</span>
												</div>
											</div>
										</div>
										<div className="border-bottom col-12 pt-4 mb-4"></div>
									</div>
						})
					}
					<div className="col-sm-6 offset-sm-3">
						<BtnMain
	        				className="font-weight-bold btn-block"
	        				onClick={this.comment}
	        				title="Fazer comentário" />
    				</div>
				</div>
	}

	buy = () => {
		
	}

	addToCart = () => {
		store.dispatch(addToCart(this.props.products.product.id, 'product', {quantity: this.count}))
	}

	comment = () => {
		store.dispatch(toggleModal(true, CommentForm))
	}

    render() {
    	const { product, salon } = this.props.products
    	const servicesCategories = this.props.categories.service
        return (
        	<div className="font-avenir pt-4">
        		<div className="container">
		            <div className="row">
		            	<div className="col-12 col-sm-4">
		            		<ImageMultiPreview className="d-none d-sm-flex" images={product.images} />
		            		<ImagePreview className="d-block d-sm-none" images={product.images} />
		            	</div>
		            	<div className="col-12 col-sm-8">
		            		<h4>
		            			<strong>{ product.name }</strong>
		            			<i className="far fa-heart fs-22 color-grey float-right"></i>
		            		</h4>
		            		<div>
		            			<Price current={product.price} old={product.discount_price} />
		            		</div>
		            		<div className="color-grey form-group">
			            		Avaliação<br />
			            		<Stars active={product.rating} />
		            		</div>
		            		<div className="form-group">
		            			<span>Envio para todos o país</span><br />
		            			<span className="color-grey">Saiba os prazos de entrega e as formas de envio.</span>
		            		</div>
		            		<div className="row form-group">
		            			<div className="col-6 col-sm-3">
			            			<span className="color-green">Calcular frete</span><br />
			            			<Counter onChange={val => this.count = val} value={this.count} />
		            			</div>
		            		</div>
		            		<div className="form-group">
			            		<BtnMain
			        				className="font-weight-bold px-4"
			        				onClick={this.buy}
			        				title="Comprar agora" />
		        				<BtnMain
			        				className="font-weight-bold btn-outline ml-2"
			        				onClick={this.addToCart}
			        				title="Adicionar ao carrinho" />
	        				</div>
		            	</div>
		            </div>
	            </div>
	            <div className="bg-main pb-4">
	            	<div className="container pt-4">
	            		<div className="rounded py-4 px-3 bg-white mb-4">
	            			<h5>Descrição</h5>
	            			<span className="color-grey">{ product.description }</span>
	            		</div>
	            		<div className="rounded pb-4 bg-white">
	            			<Tabs tabs={[
	            				{
	            					title: 'Sobre',
	            					content: <SalonInfo {...salon} />
	            				}, {
	            					title: 'Produtos',
	            					content: <MainList type="products" itemType="small" />
	            				}, {
	            					title: 'Serviços',
	            					content: <Accordion list={servicesCategories} />
	            				}, {
	            					title: 'Avaliações',
	            					content: this.getReviewList()
	            				}, {
            						title: 'Perguntas'
	            				}]} />
	            		</div>
	            	</div>
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state => 
	({
        products: {
        	product: state.products.product,
        	salon: state.products.salon
        },
        categories: {
        	service: state.categories.service
        }
    })

export default connect(
    mapStateToProps
)(Product)