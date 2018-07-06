import React, { Component } from 'react'
import store from 'store'
import { sendVoucher } from 'actions/user'
import Input from 'components/inputs/input'
import TextArea from 'components/inputs/textarea'
import BtnMain from 'components/buttons/btn_main'

class SendVouchersForm extends Component {
    
    sendVoucher = () => {
        const data = {
            voucher_id: this.props.data.id,
            to: this.email.value,
            message: this.message.value,
        }
        store.dispatch(sendVoucher(data))
        .then(res => {
            if (res) {
                this.props.onCancel()
            }
        })
    }

    render() {
        return (
        	<div>
                <div className="text-center mb-3">
                    <h4>Enviar para um amigo</h4>
                    <span>Aplica-se uma taxa de 15%.</span>
                </div>
        		<Input 
                    required
                    bottomText="Para quem devemos enviar os créditos?"
                    label="E-mail"
                    inputRef={ref => this.email = ref} />
        		<TextArea 
                    required
                    label="Mensagem"
                    inputRef={ref => this.message = ref} />
        		<BtnMain
    				className="font-weight-bold btn-outline btn-block"
    				onClick={this.props.onCancel}
    				title="Cancelar" />
        		<BtnMain
    				className="font-weight-bol btn-block"
    				onClick={this.sendVoucher}
    				title="Compar agora" />
			</div>
        );
    }
}

export default SendVouchersForm