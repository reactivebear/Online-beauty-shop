import React, { Component } from 'react'
import store from 'store'
import { registration } from 'actions/auth.js'
import BtnMain from 'components/buttons/btn_main.js'
import Input from 'components/inputs/input.js'

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.auth = {}
    }

    getMyPosition = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            this.registration({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            })
        }, this.registration)
    }

    registration = pos => {
        let data = {
            email: this.auth.email.value,
            password: this.auth.password.value,
            address: {
                street: 'Prince Roman',
                longitude: pos.latitude || '',
                latitude:  pos.longitude || '',
            }
        }
        
        if (this.props.type === 'personal') {
            data.first_name = this.auth.first_name.value
            data.last_name = this.auth.last_name.value
        } else {
            data.cnpj = this.auth.cnpj.value
            data.company_name = this.auth.company_name.value
        }
            
        store.dispatch(registration(data))
    }

    render() {
        return (
        	<div>
                {
                    this.props.type === 'personal'
                    ?   <div>
                            <Input 
                                required
                                label="Name"
                                value={''}
                                inputRef={ref => this.auth.first_name = ref} />
                            <Input 
                                required
                                label="Sobrenome"
                                value={''}
                                inputRef={ref => this.auth.last_name = ref} />
                        </div>
                    :   <div>
                            <Input 
                                required
                                label="CNPJ"
                                value={''}
                                inputRef={ref => this.auth.cnpj = ref} />
                            <Input 
                                required
                                label="Razão social"
                                value={''}
                                inputRef={ref => this.auth.company_name = ref} />
                        </div>
                }
                    
                <Input 
                    required
                    type="email"
                    label="E-mail"
                    value={''}
                    inputRef={ref => this.auth.email = ref} />
                <Input 
                    required
                    type="password"
                    label="Senha"
                    value={''}
                    inputRef={ref => this.auth.password = ref} />
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <BtnMain
                            className="font-weight-bold btn-block"
                            onClick={this.getMyPosition}
                            title="Criar conta" />
                    </div>
                </div>
			</div>
        );
    }
}

export default RegistrationForm