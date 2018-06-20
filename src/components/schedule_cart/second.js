import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { toggleModal } from 'actions/design'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import BtnMain from 'components/buttons/btn_main'
import { CardSmallForm } from 'components/forms'

class StepSecond extends Component {
    state = {
        isSet: false,
        card: {
            name: '',
            holder: '',
            number: '',
            date: '',
            cvv: ''
        }
    }

    openModal = () => {
        store.dispatch(toggleModal(true, CardSmallForm, 'modal-md', 'Você ainda não cadastrou um cartão de crédito'))
    }

    render() {
        return (
        	<div className="row pb-5">
                <div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    {
                        this.props.schedule_cart.guest_card.card_name
                        ?   <div className="rounded bg-white p-4 mb-3">
                                <div className="fs-16">Meu cartão</div>
                            </div>
                        :   ''
                    }  
                    <div className="mb-3">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold bg-main"
                            onClick={this.openModal}
                            title="Alterar endereço" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <h4>Resumo do pedido</h4>
                    <ScheduleCartTotal value={this.props.cart.total} step={this.props.step} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            total: state.cart.total
        },
        schedule_cart: {
            guest_card: state.schedule_cart.guest_card
        }
    })

export default connect(
    mapStateToProps
)(StepSecond)