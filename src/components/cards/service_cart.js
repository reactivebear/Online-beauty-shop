import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { toggleModal, updateModal } from 'actions/design'
import { getProffesional } from 'actions/schedule_cart'
import Price from 'components/price'
import moment from 'moment'
import RadioSwitch from 'components/inputs/radio_switch'
import BtnMain from 'components/buttons/btn_main'

class ServiceCart extends Component {
	state = {
		activeProfessional: 0,
		proffesional: {
			user: {}
		}
	}

	getDuration = () => {
		let temp = ''
		for (let k in moment.duration(this.props.duration)._data) {
			if (moment.duration(this.props.duration)._data[k]) {
				temp += `${moment.duration(this.props.duration)._data[k]} ${k} `
			}
		}
		return temp
	}

	toggleProfessional = activeProfessional => {
		store.dispatch(updateModal(activeProfessional))
		const prof = this.props.salon.professionals.find(item => item.id === activeProfessional)
		store.dispatch(getProffesional(prof))
	}

	professionalsList = props => {
	    return (
	        <div className="pt-3">
	        	<div className="mb-2">
		            {this.props.salon.professionals.map((item, i) => {
		            	const lastClass = this.props.salon.professionals.length === i + 1 ? '' : ' border-bottom'
		            	return 	<div key={i} className={`d-flex justify-content-start align-items-center py-2${lastClass}`}>
					                <div className="pr-3 w-20"><img src="/assets/images/default-professional.png" alt="" className="img-fluid" /></div>
					                <div>{item.user.first_name} {item.user.last_name}</div>
					                <div className="ml-auto">
					                	<RadioSwitch
					                		style={{transform: 'scale(0.73, 0.7)'}} 
			                                onChange={this.toggleProfessional} 
			                                value={item.id}
			                                checked={this.props.schedule_cart.proffesional.data.id} />
					                </div>
					            </div>
		            })}
	            </div>
	            <BtnMain 
	            	className="btn-outline btn-block"
	            	onClick={props.onCancel}
	            	title="Cancelar" />
	        </div>
	    )
	}

	openProfessionals = () => {
		store.dispatch(toggleModal(true, this.professionalsList, 'modal-sm', 'Profissionais'))
	}

    render() {
    	const { salon } = this.props
    	const proffesional = this.props.schedule_cart.proffesional
        return (
        	<div className="bg-white px-3 py-3 rounded">
	            <div className="fs-16 mb-3">
	            	{this.props.title}
            	</div>
            	<Price current={this.props.price} />
	            <div className="color-grey mb-2">{ this.getDuration() }</div>
	            <div className="border-bottom mb-2  mr--3 ml--3"></div>
	            {
	            	salon.professionals.length
	            	? 	<div className="d-flex justify-content-between mb-2">
			            	{
			            		proffesional.data.id
			            		? 	<div className="color-grey">{`com ${proffesional.data.user.first_name} ${proffesional.data.user.first_name}`}</div>
			            		: 	''
			            	}
		            		<div className="pointer color-green align-self-end" onClick={this.openProfessionals}>Alterar</div>
	            		</div>
	            	: 	''
	            }
	            <div className="border-bottom mb-2 mr--3 ml--3"></div>
            	<div className="color-grey">{`${salon.address.title}, ${salon.address.number} ${salon.address.street}`}</div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        schedule_cart: {
        	proffesional: state.schedule_cart.proffesional
        }
    })

export default connect(
    mapStateToProps
)(ServiceCart)