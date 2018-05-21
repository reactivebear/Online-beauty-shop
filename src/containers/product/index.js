import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getProduct } from 'actions/products.js'
import ImageMultiPreview from 'components/images/multi_preview.js'
import ImagePreview from 'components/images/preview.js'
import Price from 'components/price'
import Stars from 'components/stars'
import Counter from 'components/counter'
import BtnMain from 'components/buttons/btn_main.js'
import Tabs from 'components/tabs'
import SalonInfo from 'components/blocks/salon_info.js'

class Product extends Component {
	constructor(props) {
		super(props)
		if (props.match.params.id) {
			store.dispatch(getProduct(props.match.params.id))
		}
	}

	buy = () => {
		console.log(this.count)
	}

    render() {
    	
    	const { product, salon } = this.props.products
        return (
        	<div className="font-avenir pt-1">
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
			            			<Counter onChange={val => this.count = val} />
		            			</div>
		            		</div>
		            		<div className="form-group">
			            		<BtnMain
			        				className="font-weight-bold px-4"
			        				onClick={this.buy}
			        				title="Comprar agora" />
		        				<BtnMain
			        				className="font-weight-bold btn-outline ml-2"
			        				onClick={this.buy}
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
	            		<div className="rounded py-4 bg-white">
	            			<Tabs tabs={[
	            				{
	            					title: 'Sobre',
	            					content: <SalonInfo {...salon} />
	            				}, {
	            					title: 'Produtos'
	            				}, {
	            					title: 'Serviços'
	            				}, {
	            					title: 'Avaliações'
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
        }
    })

export default connect(
    mapStateToProps
)(Product)