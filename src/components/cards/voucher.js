import React, { Component } from 'react'
import ImagePreview from 'components/images/preview'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main'

class CardVoucher extends Component {
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
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<BtnMain
							title="Enviar para..."
							className="btn-block btn-outline" />
						<BtnMain
							title="Compartilhar"
							className="btn-block btn-outline" />
						<BtnMain
							title="Agendar"
							className="btn-block" />
					</div>
				</div>
			</div>
		)
	}
}

export default CardVoucher