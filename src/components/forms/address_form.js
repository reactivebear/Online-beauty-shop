import React, { Component } from 'react'
import { history } from 'store'
import BtnMain from 'components/buttons/btn_main.js'
import Input from 'components/inputs/input.js'

class AddressForm extends Component {

    constructor(props) {
        super(props)
        this.address = {}
    }

    render() {
        const address = history.location.state || {}
        return (
        	<div>
                <Input 
                    required
                    label="Nome de endereço"
                    description="ex: minha casa, meu trabalho"
                    value={address.title}
                    inputRef={ref => this.address.title = ref} />
                <Input 
                    required
                    label="Nome"
                    value={address.first_name}
                    inputRef={ref => this.address.first_name = ref} />
                <Input 
                    required
                    label="Sobrenome"
                    value={address.last_name}
                    inputRef={ref => this.address.last_name = ref} />
                <div className="row">
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Telefone"
                            value={address.phone}
                            inputRef={ref => this.address.phone = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Celular"
                            value={address.celular}
                            inputRef={ref => this.address.celular = ref} />
                    </div>
                </div>
                <Input 
                    required
                    label="CEP"
                    value={address.cep}
                    inputRef={ref => this.address.cep = ref} />
                <Input 
                    required
                    label="Endereço"
                    value={address.street}
                    inputRef={ref => this.address.street = ref} />
                <div className="row">
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Número"
                            value={address.number}
                            inputRef={ref => this.address.number = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Complemento"
                            value={address.complemento}
                            inputRef={ref => this.address.complemento = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="País"
                            value={address.pais}
                            inputRef={ref => this.address.pais = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Estado"
                            value={address.country}
                            inputRef={ref => this.address.country = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Cidade"
                            value={address.city}
                            inputRef={ref => this.address.city = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Bairro"
                            value={address.neighborhood}
                            inputRef={ref => this.address.neighborhood = ref} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <BtnMain
                            className="font-weight-bold btn-outline btn-block"
                            onClick={e => history.goBack()}
                            title="Cancelar" />
                        <BtnMain
                            className="font-weight-bold btn-block"
                            onClick={this.save}
                            title="Salvar" />
                    </div>
                </div>
			</div>
        );
    }
}

export default AddressForm