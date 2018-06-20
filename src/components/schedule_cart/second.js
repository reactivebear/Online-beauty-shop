import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { toggleModal } from 'actions/design'
import { getCreditCards } from 'actions/user'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import BtnMain from 'components/buttons/btn_main'
import { CardSmallForm } from 'components/forms'
import Input from 'components/inputs/input'
import { format } from 'utils/mask'

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

    checkMask = (mask, field) => e => {
        this.cvv.value = format(mask, e.target.value)
    }

    openModal = () => {
        store.dispatch(toggleModal(true, CardSmallForm, 'modal-md', 'Você ainda não cadastrou um cartão de crédito'))
    }

    componentWillMount() {
        if (!this.props.user.guest) {
            store.dispatch(getCreditCards())
        }
    }

    getCardNumber = num => `****.****.****.${num.slice(-4)}`

    render() {
        const { default_card } = this.props.user
        return (
        	<div className="row pb-5">
                <div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    {
                        !Object.keys(this.props.user.default_card).length
                        ?   ''
                        :   <div className="bg-white rounded p-3 mb-3">
                                <div className="fs-18 mb-3">{default_card.card_name}</div>
                                <div className="color-grey">{this.getCardNumber(default_card.card_number)}</div>
                                <div className="color-grey mb-1">Visa</div>
                                <div className="color-grey">Coloque o código de segurança do cartão</div>
                                <div className="d-flex">
                                    <Input
                                        value={''}
                                        className="bg-main"
                                        onChange={this.checkMask('cvv', 'cvv')}
                                        inputRef={ref => this.cvv = ref} />
                                </div>
                            </div>
                    }
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
                            title="Alterar cartão" />
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
        },
        user: {
            guest: state.user.guest,
            default_card: state.user.default_card
        }
    })

export default connect(
    mapStateToProps
)(StepSecond)