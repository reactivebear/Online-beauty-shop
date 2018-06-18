import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import CartTotal from 'components/cards/cart_total.js'
import RadioSwitch from 'components/inputs/radio_switch.js'
import BtnMain from 'components/buttons/btn_main.js'
import { AddressForm } from 'components/forms'
import { toggleModal } from 'actions/design'

class StepSecond extends Component {
    state = {
        delivery: 'free'
    }

    toggleDelivery = value => {
        this.setState({
            delivery: value
        })
    }

    openModal = () => {
        store.dispatch(toggleModal(true, AddressForm, 'modal-md', 'Você ainda não cadastrou um endereço de entrega'))
    }

    componentWillMount() {
        //store.dispatch(getDelivery(this.props.user.data.addresses[0].id))
    }

    render() {
        const { first_name, last_name, main_address } = this.props.user.data
        console.log(main_address)
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
                {
                    !this.props.user.guest
                    ?   <div>
                            <h4>Dados do cartão</h4>
                            <div className="rounded bg-white p-4 mb-3">
                                <div className="fs-18 mb-3">{`${first_name} ${last_name}`}</div>
                                <div className="color-grey">{main_address.title}</div>
                                <div className="color-grey">{main_address.state}, {main_address.state}</div>
                                <div className="color-grey">CEP: {main_address.zipcode}</div>
                            </div>
                        </div>
                    :   <div></div>
                }
                        
                    <div className="mb-3">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold bg-main"
                            onClick={this.openModal}
                            title="Alterar endereço" />
                    </div>
        			<h4>Tipo de envio</h4>
                    <div className="rounded bg-white p-4">
                        <div className="mb-4">
                            <RadioSwitch 
                                onChange={this.toggleDelivery} 
                                value="free"
                                title="Entrega expressa"
                                checked={this.state.delivery} />
                        </div>
                        <div>
                            <RadioSwitch 
                                onChange={this.toggleDelivery} 
                                value="notfree"
                                title="Entrega Padrão"
                                checked={this.state.delivery} />
                        </div>
                    </div>
        		</div>
        		<div className="col-sm-6">
        			<h4>Resumo do pedido</h4>
                    <CartTotal value={this.props.cart.total} step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: {
            total: state.cart.total
        },
        user: {
            data: {
                main_address: state.user.data.main_address,
                first_name: state.user.data.first_name,
                last_name: state.user.data.last_name,
            },
            guest: state.user.guest
        }
    }
}

export default connect(
    mapStateToProps
)(StepSecond)