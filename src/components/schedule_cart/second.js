import React, { Component } from 'react'
import store, { history } from 'store'
import { connect } from 'react-redux'
import { toggleModal } from 'actions/design'
import { getCreditCards } from 'actions/user'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import BtnMain from 'components/buttons/btn_main'
import { CardSmallForm } from 'components/forms'
import Input from 'components/inputs/input'
import { format } from 'utils/mask'

class StepSecond extends Component {
    
    checkMask = (mask, field) => e => {
        this.cvv.value = format(mask, e.target.value)
    }

    changeBilling = () => {
        if (this.props.user.guest) {
            store.dispatch(toggleModal(true, CardSmallForm, 'modal-md', 'Você ainda não cadastrou um cartão de crédito'))
        } else {
            history.push('/profile/cards')
        }
    }

    componentWillMount() {
        if (!this.props.user.guest) {
            store.dispatch(getCreditCards())
        }
    }

    getCardNumber = num => `****.****.****.${num.slice(-4)}`

    render() {
        const { default_card } = this.props.user
        const { guestCard } = this.props.cart
        return (
        	<div className="row pb-5">
                <div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    {
                        !this.props.user.guest && Object.keys(default_card).length
                        ?   <div className="bg-white rounded p-3 mb-3">
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
                        :   Object.keys(guestCard).length
                            ?   <div className="bg-white rounded p-3 mb-3">
                                    <div className="fs-18 mb-3">{guestCard.card_name}</div>
                                    <div className="color-grey">{this.getCardNumber(guestCard.card_number)}</div>
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
                            :   ''
                    }  
                    <div className="mb-3">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold bg-main"
                            onClick={this.changeBilling}
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
            total: state.cart.total,
            guestCard: state.cart.guestCard
        },
        user: {
            guest: state.user.guest,
            default_card: state.user.default_card
        }
    })

export default connect(
    mapStateToProps
)(StepSecond)