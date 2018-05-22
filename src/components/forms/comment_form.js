import React, { Component } from 'react'
import store from 'store'
import Stars from 'components/stars'
import Input from 'components/inputs/input.js'
import TextArea from 'components/inputs/textarea.js'
import BtnMain from 'components/buttons/btn_main.js'
import { toggleModal } from 'actions'

class CommentForm extends Component {

	sendComment = () => {
        const data = {
            email: this.text.value,
            message: this.message.value,
            rating: this.stars
        }
	}

	closeModal = () => {
		store.dispatch(toggleModal(false, null))
	}

    render() {
        return (
        	<div>
        		<div className="form-group text-center">
	            	<Stars 
                        active={this.stars}
                        editable
                        onChange={val => this.stars = val} />
            	</div>
            	<div className="form-group">
            		<Input 
                        required
                        label="E-mail"
                        inputRef={ref => this.text = ref} />
            	</div>
            	<div className="form-group">
            		<TextArea 
                        required
                        label="Mensagem"
                        inputRef={ref => this.message = ref} />
            	</div>
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

export default CommentForm