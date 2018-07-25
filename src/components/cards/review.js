import React, { Component } from 'react'
import Stars from 'components/stars'
import ImagePreview from 'components/images/preview'
import Price from 'components/price'
import { getLang } from 'utils/lang'

class CardReview extends Component {
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
							{getLang('Vendido e realizado por')} <span className="color-green pointer">{getLang('Olist')}</span>
						</div>
						<Price current={72} />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="color-grey">
							{getLang('Número do Pedido')}
						</div>
						<div>334930950</div>
					</div>
					<div className="col-6">
						<div className="color-grey">
							{getLang('Avaliação')}
						</div>
						<Stars active={5} />
					</div>
					<div className="col-6">
						<div className="color-grey">
							{getLang('Data de compra')}
						</div>
						<div>23/04/2018</div>
					</div>
					<div className="col-6">
						<div className="color-grey">
							{getLang('Data da avaliação')}
						</div>
						<div>23/04/2018</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CardReview