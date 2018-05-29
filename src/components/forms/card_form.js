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
        	<div>
                <Input 
                    required
                    label="Nome para o cartão"
                    description="ex: meu cartão1, meu cartão2"
                    value={card.title}
                    inputRef={ref => this.card.title = ref} />
                <Input 
                    required
                    label="Nome impresso no cartão"
                    value={card.first_name}
                    inputRef={ref => this.card.first_name = ref} />
                <Input 
                    required
                    label="Número do cartão"
                    value={card.last_name}
                    inputRef={ref => this.card.last_name = ref} />
                <div className="row">
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Validate"
                            value={card.last_name}
                            inputRef={ref => this.card.last_name = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Código de segurança"
                            value={card.last_name}
                            inputRef={ref => this.card.last_name = ref} />
                    </div>
                </div>
			</div>
        );
    }
}

export default CardForm