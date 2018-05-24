import React, { Component } from 'react'
import store from 'store'
import { setStep } from 'actions/cart.js'
import BtnMain from 'components/buttons/btn_main.js'
import Price from 'components/price'

class CartTotal extends Component {
	changeStep = () => {
		store.dispatch(setStep(this.props.step+1))
	}

	render() {
		return (
			<div className="rounded bg-white p-4">
				<div className="d-flex justify-content-between color-grey">
					<div><h5>Subtotal:</h5></div>
					<div><Price current={this.props.value.total} /></div>
				</div>
				<div className="border-bottom mb-5"></div>
				<div className="col-sm-10 offset-sm-1">
					<BtnMain
	                    className="btn-block font-weight-bold"
	                    onClick={this.changeStep}
	                    title="Continuar" />
                </div>
			</div>
		)
	}
}

export default CartTotal