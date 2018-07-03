import React, { Component } from 'react'
import store from 'store'
import { toggleModal } from 'actions/design'
import ImagePreview from 'components/images/preview'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main'
import { SendVouchersForm } from 'components/forms'
import Input from 'components/inputs/input'

class CardVoucher extends Component {
	openSendVoucher = () => {
		store.dispatch(toggleModal(true, SendVouchersForm, 'modal-sm', '', {id: 34, position: 'center'}))
	}

	socialForm = () => {
		return 	<div>
					<div className="mb-1">Click to share on:</div>
					<div className="mb-3">
						<i className="fab fa-facebook-square fa-2x color-facebook mr-2 pointer"></i>
						<i className="fab fa-google-plus-square fa-2x color-google mr-2 pointer"></i>
						<i className="fab fa-twitter-square fa-2x color-twitter pointer"></i>
					</div>
					<Input
	                    label="Or copy link:"
	                    readonly
	                    value={'https://g.co/doodle/bp37sm'} />
				</div>
	}

	openSocialSend = () => {
		store.dispatch(toggleModal(true, this.socialForm, 'modal-sm', 'Social', {position: 'center'}))
	}

	render() {
		return (
			<div className="bg-white rounded p-3">
				<div className="d-flex">
					<div className="w-40">
						<ImagePreview images={''} />
					</div>
					<div className="w-60 pl-2">
						<div className="fs-16">Máscara Senscience  Inner Restore Intensif  500ml</div>
						<div className="color-grey">
							Vendido e realizado por <span className="color-green pointer">Olist</span>
						</div>
						<Price current={72} />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-6">
						<div className="color-grey">
							Profissional
						</div>
						<div>Margarette Reis</div>
					</div>
					<div className="col-6">
						<div className="color-grey">
							Validade
						</div>
						<div>09/03/2018 (30 dias)</div>
					</div>
					<div className="col-6">
						<div className="color-grey">
							Contato
						</div>
						<div>(11) 96162-1832</div>
					</div>
					<div className="col-12">
						<div className="color-grey">
							Local
						</div>
						<div>Rua Diogo jacome, 447 Villa Nova Conceição</div>
					</div>
				</div>
				{ 	
					this.props.buttons
					? 	<div className="row justify-content-center">
							<div className="col-lg-10">
								<BtnMain
									title="Enviar para..."
									onClick={this.openSendVoucher}
									className="btn-block btn-outline" />
								<BtnMain
									title="Compartilhar"
									onClick={this.openSocialSend}
									className="btn-block btn-outline" />
								<BtnMain
									title="Agendar"
									className="btn-block" />
							</div>
						</div>
					: 	''
				}
			</div>
		)
	}
}

export default CardVoucher