import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { setStep } from 'actions/cart.js'
import BtnMain from 'components/buttons/btn_main.js'
import Price from 'components/price'
import CheckBox from 'components/inputs/checkbox.js'

class CartTotal extends Component {
	changeStep = last => e => {
		if (this.props.step < last) {
			store.dispatch(setStep(this.props.step+1))
		}
	}

	render() {
		const lastStep = this.props.cart.list.service.length ? 4 : 5
		return (
			<div className="rounded bg-white p-4">
				{
					this.props.step !== 3
					? 	<div className="d-flex justify-content-between color-grey">
							<div><h5>Subtotal:</h5></div>
							<div><Price current={this.props.value.products} /></div>
						</div>
					: 	<div>
							<h5>Usar créditos</h5>
							<div className="d-flex justify-content-between color-grey">
								<div><Price className="d-inline-block" current={this.props.user.data.credit_amount} /> créditos</div>
								<div><CheckBox onChange={e => {this.credits = e.target.checked}} /></div>
							</div>
						</div>
				}

				{
					this.props.step === 2 || this.props.step === 4 || this.props.step === 5
					? 	<div className="d-flex justify-content-between color-grey">
							<div><h5>Frete:</h5></div>
							<div><Price current={this.props.value.delivery} /></div>
						</div>
					: 	''
				}
				{
					this.props.step === 4 || this.props.step === 5
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
						this.props.step === lastStep - 1
						? 	<BtnMain
			                    className="btn-block btn-outline font-weight-bold"
			                    onClick={() => store.dispatch(setStep(this.props.step-1))}
			                    title="Alterar meio de pagamento" />
						: 	''
					}
					{
						this.props.step === lastStep
						?	<div>
								<BtnMain
				                    className="btn-block btn-outline font-weight-bold"
				                    title="Agendar serviços" />
			                    <BtnMain
				                    className="btn-block btn-outline font-weight-bold mb-2"
				                    title="Acompanhar produtos" />
		                    </div>
						: 	''
					}
					
					<BtnMain
	                    className="btn-block font-weight-bold"
	                    onClick={this.changeStep(lastStep)}
	                    title="Continuar" />
                </div>
			</div>
		)
	}
}

const mapStateToProps = state =>
    ({
        user: {
            data: {
            	credit_amount: state.user.data.credit_amount
            }
        },
        cart: {
        	list: state.cart.list,
        }
    })

export default connect(
    mapStateToProps
)(CartTotal)