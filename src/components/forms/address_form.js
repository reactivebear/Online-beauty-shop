import React, { Component } from 'react'
import store, { history } from 'store'
import { saveAddress } from 'actions/user'
import BtnMain from 'components/buttons/btn_main.js'
import Input from 'components/inputs/input.js'
import { format } from 'utils/mask'

class AddressForm extends Component {

    constructor(props) {
        super(props)
        this.address = {}
    }

    save = () => {
        const data = {
            title: this.address.title.value,
            email: '',
            phone: this.address.phone.value,
            longitude: '',
            latitude: '',
            street: this.address.street.value,
            number: this.address.number.value,
            zipcode: '',
            complement: '',
            district: this.address.district.value,
            city: this.address.city.value,
            state: this.address.state.value,
            country: this.address.country.value
        }
        store.dispatch(saveAddress(data)).then(res => {
            history.push('/profile/address/')
        })
    }

    checkMask = (mask, field) => e => {
        this.address[field].value = format(mask, e.target.value)
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
                    onChange={this.checkMask('alphabet', 'title')}
                    inputRef={ref => this.address.title = ref} />
                <Input 
                    required
                    label="Nome"
                    value={address.first_name}
                    onChange={this.checkMask('alphabet', 'first_name')}
                    inputRef={ref => this.address.first_name = ref} />
                <Input 
                    required
                    label="Sobrenome"
                    value={address.last_name}
                    onChange={this.checkMask('alphabet', 'last_name')}
                    inputRef={ref => this.address.last_name = ref} />
                <div className="row">
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Telefone"
                            value={address.phone}
                            onChange={this.checkMask('phone', 'phone')}
                            inputRef={ref => this.address.phone = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Celular"
                            value={address.celular}
                            onChange={this.checkMask('phone', 'celular')}
                            inputRef={ref => this.address.celular = ref} />
                    </div>
                </div>
                <Input 
                    required
                    label="CEP"
                    value={address.cep}
                    onChange={this.checkMask('cep', 'cep')}
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
                            onChange={this.checkMask('digits', 'number')}
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
                            value={address.country}
                            onChange={this.checkMask('alphabet', 'country')}
                            inputRef={ref => this.address.country = ref} />
                    </div>
                    <div className="col-sm-6">
                        <Input 
                            required
                            label="Estado"
                            value={address.state}
                            onChange={this.checkMask('alphabet', 'state')}
                            inputRef={ref => this.address.state = ref} />
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
                            value={address.district}
                            inputRef={ref => this.address.district = ref} />
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