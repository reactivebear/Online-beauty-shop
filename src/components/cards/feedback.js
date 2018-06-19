import React, { Component } from 'react'
import Stars from 'components/stars'
import ImagePreview from 'components/images/preview'

class CardFeedback extends Component {
	render() {
		return (
			<div className="bg-white rounded p-3">
				<div className="row">
					<div className="col-lg-2 col-md-4 col-sm-6">
						<ImagePreview images={''} />
					</div>
					<div className="col-lg-6 col-md-8 col-sm-6">
						<div>Máscara Senscience Inner Restore Intensif 500ml</div>
						<div className="color-grey mb-3">
							Vendido e realizado por <span className="color-green pointer">Olist</span>
						</div>
						<div className="row d-md-flex d-none">
							<div className="col-md-6">
								<div className="color-grey">Data de compra:</div>
								<div>23/04/2018</div>
							</div>
							<div className="col-md-6">
								<div className="color-grey">Data de avaliação:</div>
								<div>23/04/2018</div>
							</div>
						</div>
					</div>

					<div className="col-6 d-md-none">
						<div className="color-grey">Data de compra:</div>
						<div>23/04/2018</div>
					</div>
					<div className="col-6 d-md-none mb-3">
						<div className="color-grey">Data de avaliação:</div>
						<div>23/04/2018</div>
					</div>

					<div className="col-12">
						<div className="fs-16 d-inline-block">Tony</div>
						<div className="color-grey d-inline-block pl-3">
							<Stars active={3} />
						</div>
						<div className="color-grey">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default CardFeedback