import React, { Component } from 'react'
import store, { history } from 'store'
import { setGuestCard } from 'actions/schedule_cart'
import Input from 'components/inputs/input'
import BtnMain from 'components/buttons/btn_main'
import CheckBox from 'components/inputs/checkbox'
import { format } from 'utils/mask'

class CardForm extends Component {

    constructor(props) {
        super(props)
        this.card = {}
    }

    checkMask = (mask, field) => e => {
        this.card[field].value = format(mask, e.target.value)
    }

    saveCard = () => {
        const data = {
            card_name: this.card.card_name.value,
            name_on_card: this.card.name_on_card.value,
            card_number: this.card.card_number.value,
            validity_month: this.card.validity_month.value,
            cvv: this.card.cvv.value,
        }
        store.dispatch(setGuestCard(data))
        this.props.onCancel()
    }

    render() {
        return (
        	<form>
                <Input 
                    required
                    label="Nome para o cartão"
                    description="ex: meu cartão1, meu cartão2"
                    value={''}
                    onChange={this.checkMask('alphabet', 'card_name')}
                    inputRef={ref => this.card.card_name = ref} />
                <Input 
                    required
                    label="Nome impresso no cartão"
                    value={''}
                    onChange={this.checkMask('alphabet', 'name_on_card')}
                    inputRef={ref => this.card.name_on_card = ref} />
                <Input 
                    required
                    label="Número do cartão"
                    value={''}
                    onChange={this.checkMask('card', 'card_number')}
                    inputRef={ref => this.card.card_number = ref} />
                <div className="row">
                    <div className="col-md-6">
                        <Input 
                            required
                            label="Validate"
                            placeholder="DD/MM"
                            value={''}
                            onChange={this.checkMask('dd/mm', 'validity_month')}
                            inputRef={ref => this.card.validity_month = ref} />
                    </div>
                    <div className="col-md-6">
                        <Input 
                            required
                            label="Código de segurança"
                            value={''}
                            onChange={this.checkMask('cvv', 'cvv')}
                            inputRef={ref => this.card.cvv = ref} />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                Salvar cartão para as proximas as proximas compras
                            </div>
                            <CheckBox onChange={e => {console.log(e.target.checked)}} />
                        </div>
                        <div className="border-bottom mb-3"></div>
                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                É o mesmo endereço de entrega?
                            </div>
                            <CheckBox onChange={e => {console.log(e.target.checked)}} />
                        </div>
                            
                    </div>

                    <div className="col-sm-8 offset-sm-2">
                        <BtnMain
                            className="font-weight-bold btn-outline btn-block"
                            onClick={this.saveCard}
                            title="Continuar" />
                    </div>
                </div>
			</form>
        );
    }
}

export default CardForm