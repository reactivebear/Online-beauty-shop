import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import BtnMain from 'components/buttons/btn_main.js'
import CheckBox from 'components/inputs/checkbox.js'
import { ProfileForm, AddressForm, CardForm } from 'components/forms'
import { saveCard } from 'actions/user'

class Edit extends Component {
	state = {
    	showAddressForm: false
    }

	toggleAddressForm = e => {
    	this.setState({showAddressForm: e.target.checked})
    }

    getCardData = fields => e => {
    	this.cardData = {
    		card_name: fields.card_name.value,
    		name_on_card: fields.name_on_card.value,
    		card_number: fields.card_number.value,
    		cvv: fields.cvv.value,
    		validity_month: fields.validity_month.value,
    		validity_year: fields.validity_year.value,
    	}
    }

    saveCard = () => {
    	store.dispatch(saveCard(this.cardData)).then(res => {
    		history.goBack()
    	})
    }

	componentWillMount() {
		switch(this.props.match.params.formType) {
			case 'address':
				this.form = <AddressForm onCancel={e => history.goBack()} />
				this.title = 'Adicionar endereço'
				break
			case 'cards':
				this.form = <CardForm onChange={this.getCardData} />
				this.title = 'Adicionar cartão'
				break
			default:
				this.form = <ProfileForm {...this.props.user.data} />
				this.title = 'Editar Meus Dados'
		}
	}

    render() {
        return (
        	<div>
        		<h4 className="mb-3">{this.title}</h4>
        		<div className="color-grey mb-3">
        			Se você está atualizando seus dados cadastrais, faça as alterações  nos campos abaixo e depois clique em "Salvar"
    			</div>
    			<div className="row">
		        	<div className="rounded p-4 bg-white border mb-3 col-lg-8">
						{ this.form }
					</div>
					{
						this.props.match.params.formType === 'cards'
						? 	<div className="rounded p-4 bg-white border mb-3 col-lg-8">
								<div className="d-flex justify-content-between align-items-center color-grey">
									<div>É o mesmo endereço de entrega?</div>
									<div><CheckBox onChange={this.toggleAddressForm} /></div>
								</div>
								{this.state.showAddressForm ? <AddressForm /> : ''}
							</div>		
						: 	''
					}
					<div className="col-lg-8">
						{
							this.props.match.params.formType === 'cards'
							? 	<div className="row">
				                    <div className="col-lg-8 offset-lg-2">
				                        <BtnMain
				                            className="font-weight-bold btn-outline btn-block"
				                            onClick={e => history.goBack()}
				                            title="Cancelar" />
				                        <BtnMain
				                            className="font-weight-bold btn-block"
				                            onClick={this.saveCard}
				                            title="Salvar" />
				                    </div>
				                </div>
							: 	''
							
						}
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
        		user_email: state.user.data.user_email,
        	}
        }
    })

export default connect(
    mapStateToProps
)(Edit)