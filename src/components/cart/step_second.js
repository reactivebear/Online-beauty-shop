import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTotal from 'components/cards/cart_total.js'
import RadioSwitch from 'components/inputs/radio_switch.js'
import BtnMain from 'components/buttons/btn_main.js'

class StepSecond extends Component {
    state = {
        delivery: 'free'
    }

    toggleDelivery = value => {
        this.setState({
            delivery: value
        })
    }

    componentWillMount() {
        //store.dispatch(getDelivery(this.props.user.data.addresses[0].id))
    }

    render() {
        
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    <div className="rounded bg-white p-4 mb-3">
                    </div>
                    <div className="mb-3">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold bg-main"
                            onClick={this.addToCart}
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
                addresses: state.user.data.addresses
            }
        }
    }
}

export default connect(
    mapStateToProps
)(StepSecond)