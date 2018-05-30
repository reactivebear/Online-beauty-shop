import React, { Component } from 'react'
import store from 'store'
import { getCredits } from 'actions/user.js'
import { toggleModal } from 'actions/design.js'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main.js'
import Counter from 'components/counter'
import { SendCreditsForm } from 'components/forms'

class Credits extends Component {
	componentWillMount() {
		store.dispatch(getCredits())
	}

	openModal = () => {
		store.dispatch(toggleModal(true, SendCreditsForm, 'modal-md'))
	}

	render() {
		return (
			<div>
				<div className="row align-items-stretch">
					<div className="col-sm-7">
						<h4>Comprar créditos</h4>
						<div className="rounded border p-3 bg-white mb-3">
							<div className="row">
								<div className="col-sm-4 col-6 offset-3 offset-sm-0">
									<img src="/assets/images/credits.png" className="img-fluid" alt="" />
								</div>
								<div className="col-sm-8">
									<div className="fs-18">Insira quantos créditos deseja comprar</div>
									<div className="color-grey mb-3 text-center text-sm-left">R$ 1,00 = 7,0 Créditos</div>
									<div className="d-flex justify-content-center justify-content-sm-start">
										<Counter className="w-50" hideDescription value={504} onChange={val => this.count = val} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-5 mb-3">
						<h4>Resumo do pedido</h4>
						<div className="rounded border p-3 bg-white">
							<div className="d-flex justify-content-between">
								<span className="fs-18">Créditos na loja:</span>
								<Price current={0} />
							</div>
							<div className="d-flex justify-content-between color-grey mb-3">
								<span className="fs-18">Total:</span>
								<Price current={72} />
							</div>
							<BtnMain
		        				className="btn-block btn-outline font-weight-bold"
		        				onClick={this.addToCart}
		        				title="Adicionar ao carrinho" />
		    				<BtnMain
		        				className="btn-block font-weight-bold"
		        				title="Comprar agora" />
						</div>
					</div>
					<div className="col-sm-7 mb-3">
						<h4>Enviar créditos</h4>
						<div className="rounded border p-3 bg-white">
							<div className="row mb-3">
								<div className="col-4">
									<img src="/assets/images/mobile-hand.png" className="img-fluid pl-sm-2 pr-sm-5" alt="" />
								</div>
								<div className="col-8">

									<div className="row mb-3">
										<div className="fs-18 col-12 col-sm-6 pr-0">Créditos na loja:</div>
										<div className="col-sm-6 col-12 text-sm-right">
											<Price current={72} />
										</div>
									</div>

									<BtnMain
				        				className="btn-block btn-outline font-weight-bold d-none d-sm-block"
				        				onClick={this.openModal}
				        				title="Enviar para..." />
								</div>
							</div>
							<div className="d-sm-none">
								<BtnMain
			        				className="btn-block btn-outline font-weight-bold"
			        				onClick={this.openModal}
			        				title="Enviar para..." />
							</div>
						</div>
					</div>
					<div className="col-12">
						<h4>Pacotes de créditos</h4>
					</div>
				</div>
			</div>
		)
	}
}

export default Credits