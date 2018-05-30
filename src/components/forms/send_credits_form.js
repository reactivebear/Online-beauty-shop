import React, { Component } from 'react'
import store from 'store'
import Stars from 'components/stars'
import Input from 'components/inputs/input.js'
import TextArea from 'components/inputs/textarea.js'
import BtnMain from 'components/buttons/btn_main.js'
import { toggleModal } from 'actions/design.js'
import Price from 'components/price'
import Counter from 'components/counter'

class SendCreditsForm extends Component {
    state = {
        price: 0,
        count: 0
    }

    countPrice = val => {
        this.setState({count: val, price: val / 7})
    }

	closeModal = () => {
		store.dispatch(toggleModal(false, null))
	}

    sendCredits = () => {

    }

    render() {
        return (
        	<div>
                <div className="text-center mb-3">
                    <h4>Enviar créditos</h4>
                    <span>Aplica-se uma taxa de 15%.</span>
                </div>
        		<Input 
                    required
                    bottomText="Para quem devemos enviar os créditos?"
                    label="E-mail"
                    inputRef={ref => this.text = ref} />
        		<TextArea 
                    required
                    bottomText="Está é a mensagem que será enviada junto com os créditos."
                    label="Mensagem"
                    inputRef={ref => this.message = ref} />
                <div>
                    Insira a quantidade de créditos que deseja enviar
                </div>

                <div className="color-grey">
                    R$ 1,00 = 7,0 Créditos
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <div className="px-5 px-sm-4 py-3">
                            <img src="/assets/images/credits.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="d-flex justify-content-center mb-3">
                            <Counter className="w-50" hideDescription step={7} value={this.state.count} onChange={this.countPrice} />
                        </div>
                        <div className="d-flex justify-content-center mb-3">    
                            <div className="fs-22 d-inline">Total: &nbsp;</div>
                            <Price className="d-inline" current={this.state.price} />
                        </div>
                    </div>
                </div>
            	
        		<BtnMain
    				className="font-weight-bold btn-outline btn-block"
    				onClick={this.closeModal}
    				title="Cancelar" />
        		<BtnMain
    				className="font-weight-bol btn-block"
    				onClick={this.sendCredits}
    				title="Enviar" />
			</div>
        );
    }
}

export default SendCreditsForm