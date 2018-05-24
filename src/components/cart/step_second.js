import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartTotal from 'components/cards/cart_total.js'
import RadioSwitch from 'components/inputs/radio_switch.js'

class StepSecond extends Component {
    state = {
        delivery: 'free'
    }

    toggleDelivery = value => {
        this.setState({
            delivery: value
        })
    }

    render() {
        return (
        	<div className="row">
        		<div className="col-sm-6">
                    <h4>Dados do cartão</h4>
                    <div className="rounded bg-white p-4 mb-3">
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
        }
    }
}

export default connect(
    mapStateToProps
)(StepSecond)