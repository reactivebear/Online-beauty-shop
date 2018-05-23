import React, { Component } from 'react'
import StepsArrow from 'components/steps/steps_arrow.js'
import { StepFirst, StepSecond, StepThird, StepFourth } from 'components/cart'

class Cart extends Component {
	state = {
		step: 1
	}

	changeStep = step => e => {
		this.setState({step})
	}

	getStep = () => {
		switch(this.state.step) {
			case 1: return <StepFirst />
			case 2: return <StepSecond />
			case 3: return <StepThird />
			case 4: return <StepFourth />
		}
	}

    render() {
    	const steps = [{title: 'Meu carrinho'}, {title: 'Entrega'}, {title: 'Pagamento'}, {title: 'Confirmação'}]

        return (
        	<div className="bg-main font-avenir pt-4">
	            <div className="container">
	            	<StepsArrow className="rounded mb-5" steps={steps} active={this.state.step} onClick={this.changeStep} />
	            	{ this.getStep() }
	            </div>
			</div>
        );
    }
}

export default Cart