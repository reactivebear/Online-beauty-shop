import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { getUserAddresses } from 'actions/user.js'
import { setStep } from 'actions/cart.js'
import StepsArrow from 'components/steps/steps_arrow.js'
import { StepFirst, StepSecond, StepThird, StepFourth, StepFifth } from 'components/cart'

class Cart extends Component {
	constructor(props) {
		super(props)
		this.steps = [{title: 'Meu carrinho'}, {title: 'Entrega'}, {title: 'Pagamento'}, {title: 'Confirmação'}]
		store.dispatch(getUserAddresses())
	}

	changeStep = step => e => {
		store.dispatch(setStep(step))
	}

	getStep = () => {
		switch(this.props.cart.step) {
			case 1: return <StepFirst step={this.props.cart.step} />
			case 2: return <StepSecond step={this.props.cart.step} />
			case 3: return <StepThird step={this.props.cart.step} />
			case 4: return <StepFourth step={this.props.cart.step} />
			case 5: return <StepFifth step={this.props.cart.step} />
			default: return
		}
	}

    render() {
        return (
        	<div className="bg-main font-avenir pt-4">
	            <div className="container">
	            	<StepsArrow className="rounded mb-5" steps={this.steps} active={this.props.cart.step} onClick={this.changeStep} />
	            	{ this.getStep() }
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: {
        	step: state.cart.step
        }
    }
}

export default connect(
    mapStateToProps
)(Cart)