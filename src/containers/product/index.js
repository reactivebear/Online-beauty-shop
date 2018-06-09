import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getProduct } from 'actions/products.js'
import { addToCart } from 'actions/cart.js'
import { getCategoriesByType, setCategory } from 'actions'
import { toggleModal } from 'actions/design.js'
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
import { getServicesCategory } from 'actions/services'

class Product extends Component {
	constructor(props) {
		super(props)
		this.count = 1
		if (props.match.params.id) {
			store.dispatch(getProduct(props.match.params.id))
		}
		store.dispatch(getCategoriesByType('service')).then(res => {
			if (res) {
				store.dispatch(setCategory(res, 'service'))
				res.forEach(item => {
					store.dispatch(getServicesCategory({category: item.id, page_size: 2}))
				})
			}
		})
	}

	getReviewList = () => {
		return 	<div className="row">
					<div className="col-md-8">
						{
							this.props.products.salon.reviews.map((item, i) => {
								return 	<div key={i}>
											<div className="d-flex">
												<div className="w-15 px-lg-3 px-sm-2 pr-2 pr-sm-0">
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
						<div className="d-flex justify-content-center">
							<BtnMain
		        				className="font-weight-bold w-80"
		        				onClick={this.comment}
		        				title="Fazer comentário" />
	    				</div>
					</div>
					
				</div>
	}

	getQuestionsList = () => {
		const questionsList = [
			{
				question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea',
				answer: ''
			}, {
				question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
				answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna'
			}, {
				question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
				answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna'
			}
		]

		return questionsList.map((item, i) =>
			(
				<div key={i}>
					<div className="row mb-3">
						<div className="col-lg-1 col-md-2 col-sm-2 col-3">
							<img src="/assets/icons/question-icon.png" alt="" className="img-fluid w-80" />
						</div>
						<div className="col-lg-11 col-md-10 col-sm-10 col-9">
							<div className="color-grey pl-sm-3">{item.question}</div>
						</div>
					</div>
					{
						item.answer
						? 	<div className="row mb-3">
								<div className="col-lg-1 col-md-2 col-sm-2 col-3">
									<img src="/assets/icons/answer-icon.png" alt="" className="img-fluid w-80" />
								</div>
								<div className="col-lg-11 col-md-10 col-sm-10 col-9">
									<div className="color-grey pl-sm-3">{item.answer}</div>
								</div>
							</div>
						: 	''
					}
					<div className="border-bottom mb-3"></div>
				</div>
			)
		)
	}

	getQuestionBlock = () =>
		(
			<div className="row">
				<div className="col-md-8">
					<div className="p-4 rounded border">
						{this.getQuestionsList()}
						<div className="row justify-content-center">
							<div className="col-sm-8">
								<BtnMain
			        				className="font-weight-bold btn-outline btn-block"
			        				title="Ver todas as perguntas" />
		        				<BtnMain
			        				className="font-weight-bold btn-block"
			        				title="Perguntar" />
	        				</div>
						</div>
					</div>
				</div>
			</div>
		)

	buy = () => {
		
	}

	addToCart = () => {
		store.dispatch(addToCart(this.props.products.product.id, 'product', {quantity: this.count}))
	}

	comment = () => {
		store.dispatch(toggleModal(true, CommentForm, 'modal-sm'))
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
		            			<span>{ product.name }</span>
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
		            		<div className="d-flex form-group">
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
	            					content: <MainList type="product" itemType="small" />
	            				}, {
	            					title: 'Serviços',
	            					content: <div className="row"><div className="col-md-8"><Accordion list={servicesCategories} /></div></div>
	            				}, {
	            					title: 'Avaliações',
	            					content: this.getReviewList()
	            				}, {
            						title: 'Perguntas',
            						content: this.getQuestionBlock()
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