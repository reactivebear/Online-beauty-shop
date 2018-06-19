import React, { Component } from 'react'
import store from 'store'
import { setScheduleStep } from 'actions/schedule_cart'
import BtnMain from 'components/buttons/btn_main.js'
import Price from 'components/price'
import CheckBox from 'components/inputs/checkbox.js'

class ScheduleCartTotal extends Component {
	changeStep = () => {
		store.dispatch(setScheduleStep(this.props.step+1))
	}

	render() {
		return (
			<div className="rounded bg-white p-4">
				{
					this.props.step !== 2
					? 	<div className="d-flex justify-content-between color-grey">
							<div><h5>Subtotal:</h5></div>
							<div><Price current={this.props.value.products} /></div>
						</div>
					: 	<div>
							<h5>Usar créditos</h5>
							<div className="d-flex justify-content-between color-grey">
								<div><Price className="d-inline-block" current={0} /> créditos</div>
								<div><CheckBox onChange={e => {this.credits = e.target.checked}} /></div>
							</div>
						</div>
				}
				{
					this.props.step === 3 || this.props.step === 5
					? 	<div className="d-flex justify-content-between color-grey">
							<div><h5>Créditos:</h5></div>
							<div><Price current={0} /></div>
						</div>
					: 	''
				}
				<div className="border-bottom mb-3 mt-3"></div>
				{
					this.props.step > 1
					? 	<div className="d-flex justify-content-between mb-3">
							<div><h5>Total:</h5></div>
							<div><Price current={this.props.value.total} /></div>
						</div>
					: 	''
				}
				<div className="col-sm-10 offset-sm-1">
					{
						this.props.step === 3
						? 	<BtnMain
			                    className="btn-block btn-outline font-weight-bold"
			                    onClick={this.changeStep}
			                    title="Alterar meio de pagamento" />
						: 	''
					}
					{
						this.props.step === 5
						?	<div>
								<BtnMain
				                    className="btn-block btn-outline font-weight-bold"
				                    onClick={this.changeStep}
				                    title="Agendar serviços" />
			                    <BtnMain
				                    className="btn-block btn-outline font-weight-bold mb-2"
				                    onClick={this.changeStep}
				                    title="Acompanhar produtos" />
		                    </div>
						: 	''
					}
					
					<BtnMain
	                    className="btn-block font-weight-bold"
	                    onClick={this.changeStep}
	                    title="Continuar" />
                </div>
			</div>
		)
	}
}

export default ScheduleCartTotal