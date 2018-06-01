import React, { Component } from 'react'
import { history } from 'store'
import Input from 'components/inputs/input.js'

class CardForm extends Component {

    constructor(props) {
        super(props)
        this.card = {}
    }

    render() {
        const card = history.location.state || {}
        return (
        	<form onChange={this.props.onChange(this.card)}>
                <Input 
                    required
                    label="Nome para o cartão"
                    description="ex: meu cartão1, meu cartão2"
                    value={card.card_name}
                    inputRef={ref => this.card.card_name = ref} />
                <Input 
                    required
                    label="Nome impresso no cartão"
                    value={card.name_on_card}
                    inputRef={ref => this.card.name_on_card = ref} />
                <Input 
                    required
                    label="Número do cartão"
                    value={card.card_number}
                    inputRef={ref => this.card.card_number = ref} />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center">
                            <Input 
                                required
                                label="Validate"
                                placeholder="Month"

                                value={card.validity_month}
                                inputRef={ref => this.card.validity_month = ref} />
                            <Input 
                                value={card.validity_year}
                                placeholder="Year"
                                className="ml-2"
                                inputRef={ref => this.card.validity_year = ref} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Código de segurança"
                            value={card.cvv}
                            inputRef={ref => this.card.cvv = ref} />
                    </div>
                </div>
			</form>
        );
    }
}

export default CardForm