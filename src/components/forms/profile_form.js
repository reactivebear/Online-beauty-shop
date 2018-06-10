import React, { Component } from 'react'
import store, { history } from 'store'
import { updateUser } from 'actions/user.js'
import BtnMain from 'components/buttons/btn_main.js'
import Input from 'components/inputs/input.js'

class ProfileForm extends Component {

    constructor(props) {
        super(props)
        this.user = {}
    }

    save = () => {
        const data = {
            first_name: this.user.first_name.value,
            last_name: this.user.last_name.value,
        }
        store.dispatch(updateUser(data)).then(res => {
            if (res) {
                history.goBack()
            }
        })
    }

    render() {
        const { first_name, last_name, user_email } = this.props
        return (
        	<div>
                <Input 
                    required
                    label="Name"
                    value={first_name}
                    inputRef={ref => this.user.first_name = ref} />
                <Input 
                    required
                    label="Sobrenome"
                    value={last_name}
                    inputRef={ref => this.user.last_name = ref} />
                <Input 
                    required
                    label="E-mail"
                    value={user_email}
                    inputRef={ref => this.user.email = ref} />
                <Input 
                    required
                    label="Senha"
                    value={''}
                    inputRef={ref => this.user.password = ref} />
                <Input 
                    required
                    label="Data de nascimento"
                    inputRef={ref => this.user.birth = ref} />
                <Input 
                    required
                    label="Sexo"
                    inputRef={ref => this.user.gender = ref} />
                <Input 
                    required
                    label="Número do CPF"
                    inputRef={ref => this.user.cpf = ref} />
                <div className="row justify-content-center">
                    <div className="form-group col-sm-8">
                        <BtnMain
                            className="btn-block btn-outline font-weight-bold"
                            onClick={() => history.goBack()}
                            title="Cancelar" />
                        <BtnMain
                            className="btn-block font-weight-bold"
                            onClick={this.save}
                            title="Salvar" />
                    </div>
                </div>
			</div>
        );
    }
}

export default ProfileForm