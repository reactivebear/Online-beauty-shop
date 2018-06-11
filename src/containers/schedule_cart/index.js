import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { getUserAddress } from 'actions/user'
import { getService } from 'actions/services'
import { setScheduleStep } from 'actions/schedule_cart'
import StepsArrow from 'components/steps/steps_arrow.js'
import { StepFirst, StepSecond, StepThird } from 'components/schedule_cart'

class ScheduleCart extends Component {
	constructor(props) {
		super(props)
		store.dispatch(getService(this.props.match.params.id))
		this.steps = [{title: 'Agendamento'}, {title: 'Pagamento'}, {title: 'Confirmação'}]
	}

	changeStep = step => e => {
		store.dispatch(setScheduleStep(step))
	}

	getStep = () => {
		switch(this.props.schedule_cart.step) {
			case 1: return <StepFirst step={this.props.schedule_cart.step} />
			case 2: return <StepSecond step={this.props.schedule_cart.step} />
			case 3: return <StepThird step={this.props.schedule_cart.step} />
			default: return
		}
	}

    render() {
        return (
        	<div className="bg-main font-avenir pt-4">
	            <div className="container">
	            	<StepsArrow className="rounded mb-5" steps={this.steps} active={this.props.schedule_cart.step} onClick={this.changeStep} />
	            	{ this.getStep() }
	            </div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        schedule_cart: {
        	step: state.schedule_cart.step
        }
    })

export default connect(
    mapStateToProps
)(ScheduleCart)