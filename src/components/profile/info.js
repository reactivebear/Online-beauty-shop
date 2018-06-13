import React, { Component } from 'react'
import { history } from 'store'
import { connect } from 'react-redux'
import BtnMain from 'components/buttons/btn_main.js'
import Avatar from 'components/images/avatar'

class Info extends Component {
	goToEdit = () => {
		history.push('profile/edit')
	}

	gotoAddress = url => e => {
		history.push('profile/address' + url)
	}

	goToCards = url => e => {
		history.push('profile/cards' + url)
	}

    render() {
    	const { first_name, last_name, email, address, image_url } = this.props.user.data
        return (
        	<div className="row">
	        	<div className="col-12 mb-3">
	        		<div className="rounded p-4 bg-white border">
						<h4 className="mb-3">Meus Dados</h4>
						<div className="border-bottom mb-4"></div>
						<div className="row align-items-center mb-3">
		    				<div className="color-grey col-lg-10 col-8">
		    					<h4>{`${first_name} ${last_name}`}</h4>
		    					<h4 className="mb-3">{email}</h4>
		    					<div className="row">
									<div className="col-12 col-lg-4 col-md-8">
										<BtnMain
					        				className="font-weight-bold btn-block"
					        				onClick={this.goToEdit}
					        				title="Editar" />
									</div>
								</div>
		    				</div>
		    				<div className="col-lg-2 col-4">
								<Avatar image={image_url} edit={true} />
							</div>
						</div>
						
					</div>
				</div>
				<div className="col-lg-6 col-md-8 mb-3">
					<div className="rounded p-4 bg-white border">
						<h4 className="mb-3">Endereço de entrega</h4>
						<div className="border-bottom mb-4"></div>
						<div className="color-grey mb-3 fs-18">
							{address.title}<br />
							{address.street}
						</div>
						<div>
							<BtnMain
		        				className="font-weight-bold btn-outline btn-block"
		        				onClick={this.gotoAddress('/add')}
		        				title="Adicionar endereço" />
	        				<BtnMain
		        				className="font-weight-bold btn-block"
		        				onClick={this.gotoAddress('/')}
		        				title="Editar" />
						</div>
					</div>
				</div>

				<div className="col-12"></div>

				<div className="col-lg-6 col-md-8">
					<div className="rounded p-4 bg-white border">
						<h4 className="mb-3">Meu cartão</h4>
						<div className="border-bottom mb-4"></div>
						<div>
							<BtnMain
		        				className="font-weight-bold btn-outline btn-block"
		        				onClick={this.goToCards('/add')}
		        				title="Adicionar cartão" />
	        				<BtnMain
		        				className="font-weight-bold btn-block"
		        				onClick={this.goToCards('/')}
		        				title="Editar" />
						</div>
					</div>
				</div>
			</div>
		);
    }
}

const mapStateToProps = state => 
	({
        user: {
        	data: {
        		first_name: state.user.data.first_name,
        		last_name: state.user.data.last_name,
        		email: state.user.data.email,
        		address: state.user.data.address,
        		image_url: state.user.data.image_url,
        	}
        }
    })

export default connect(
    mapStateToProps
)(Info)