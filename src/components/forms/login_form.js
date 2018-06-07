import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'
import Input from 'components/inputs/input.js'
import { Link } from 'react-router-dom'
import store, { history } from 'store'
import { login } from 'actions/auth.js'

class LoginForm extends Component {
    
    login = e => {
        e.preventDefault()
        const data = {
            email: this.email.value,
            password: this.password.value,
        }

        store.dispatch(login(data)).then(res => {
            if (res) {
               this.props[0]() 
            }
        })
    }

    goToRegistration = () => {
        this.props[0]()
        history.push('/registration')
    }

    render() {
        return (
        	<form onSubmit={this.login}>
                <h4 className="text-center">Identificação</h4>
                <div className="form-group">
                    <Input 
                        required
                        label="Email"
                        inputRef={ref => this.email = ref} />
                </div>
                <div className="form-group">
                    <Input 
                        required
                        type="password"
                        label="Senha"
                        inputRef={ref => this.password = ref} />
                </div>
            	<div className="form-group">
            		<BtnMain
        				className="font-weight-bold btn-block"
                        type="submit"
        				title="Entrar" />
            	</div>
                <div className="form-group text-right">
                    <Link to="/recovery" className="color-grey">Esqueceu sua senha?</Link>
                </div>
                <div className="border-bottom mb-2"></div>
                <div className="d-flex flex-sm-row flex-column form-group">
                    <div className="pr-sm-1 mb-1">
                        <BtnMain
                            className="btn-block btn-facebook px-1"
                            onClick={this.login}
                            title="Entrar com o Facebook" />
                    </div>
                    <div className="pl-sm-1">
                        <BtnMain
                            className="btn-block btn-google px-1"
                            onClick={this.login}
                            title="Entrar com o Google +" />
                    </div>
                </div>
                <div className="form-group">
                    <BtnMain
                        className="font-weight-bold btn-outline btn-block"
                        onClick={this.goToRegistration}
                        title="Criar cadastro" />
                </div>
			</form>
        );
    }
}

export default LoginForm