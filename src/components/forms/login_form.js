import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'

class LoginForm extends Component {
    render() {
        return (
        	<div>
            	<div className="form-group">
            		<BtnMain
        				className="font-weight-bold btn-outline ml-2"
        				onClick={this.closeModal}
        				title="Cancelar" />
            		<BtnMain
        				className="font-weight-bol ml-2"
        				onClick={this.sendComment}
        				title="Enviar" />
            	</div>
			</div>
        );
    }
}

export default LoginForm