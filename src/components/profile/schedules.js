import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getAppointments } from 'actions/user.js'
import BtnMain from 'components/buttons/btn_main.js'

class Schedules extends Component {
	componentWillMount() {
		store.dispatch(getAppointments())
	}

	render() {
		return (
			<div>
				{
					this.props.user.appointments.length
					? 	<div>Appointments List</div>
					: 	<div className="rounded bg-white border p-3 text-center">
							<div className="row justify-content-center mb-4">
								<div className="col-6 col-sm-4">
									<img src="/assets/images/book.png" alt="" className="img-fluid" />
								</div>
							</div>
							<div className="color-grey mb-4">
								Você ainda não agendou um horário. 
								<br />
								Que tal encontrar um novo estabelecimento?
							</div>
							<div className="row justify-content-center">
								<div className="col-sm-6">
									<BtnMain
				        				className="btn-block btn-outline font-weight-bold"
				        				title="Vamos lá" />
		        				</div>
		    				</div>
						</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => 
	({
        user: {
        	appointments: state.user.appointments
        }
    })

export default connect(
    mapStateToProps
)(Schedules)