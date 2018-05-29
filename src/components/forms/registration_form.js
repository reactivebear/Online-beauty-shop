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

    registration = () => {
        const data = {
            first_name: this.auth.first_name.value,
            last_name: this.auth.last_name.value,
            email: this.auth.email.value,
            password: this.auth.password.value,
            address: {
                street: 'Prince Roman',
                longitude: 123,
                latitude: 132,
            }
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
                                inputRef={ref => this.auth.first_name = ref} />
                            <Input 
                                required
                                label="Razão social"
                                value={''}
                                inputRef={ref => this.auth.last_name = ref} />
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
                            onClick={this.registration}
                            title="Criar conta" />
                    </div>
                </div>
			</div>
        );
    }
}

export default RegistrationForm