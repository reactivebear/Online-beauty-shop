import React, { Component } from 'react'
import store from 'store'
import { sendProductComment, getProductComments } from 'actions/products'
import { sendSalonComment } from 'actions/services'
import { setAlert } from 'actions/design'
import Stars from 'components/stars'
import Input from 'components/inputs/input.js'
import TextArea from 'components/inputs/textarea.js'
import BtnMain from 'components/buttons/btn_main.js'

class CommentForm extends Component {

    state = {
        rating: '',
        activeStar: ''
    }

	sendComment = () => {
        if (/\S+@\S+\.\S+/.test(this.email.value)) {
            const data = {
                email: this.email.value,
                comment: this.message.value,
                rating: this.state.rating
            }

            switch (this.props.data.type) {
                case 'salon':
                    store.dispatch(sendSalonComment(data, this.props.data.id))
                    .then(res => {
                        if (res) {
                            this.props.onCancel()
                        }
                    })
                    break
                case 'product':
                    store.dispatch(sendProductComment(data, this.props.data.id))
                    .then(res => {
                        if (res) {
                            store.dispatch(getProductComments(this.props.data.id))
                            this.props.onCancel()
                        }
                    })
                    break
                default: return
            }
            
        } else {
            store.dispatch(setAlert('Email is incorrect', 'error'))
        }
	}

    onHover = val => e => {
        this.setState({activeStar: val-1, rating: this.state.rating})
    }

    changeStars = val => {
        this.setState({rating: val})
    }

    render() {
        const levels = ['Excelente', 'Bom', 'Normal', 'Satisfatório', 'Ruim'].reverse()
        const level = this.state.activeStar + 1 > 0 ? <span>{levels[this.state.activeStar]}</span> : <strong>{levels[this.state.rating - 1]}</strong>
        return (
        	<div>
        		<div className="form-group text-center color-grey fs-22">
	            	<Stars 
                        active={this.state.rating}
                        editable
                        onHover={this.onHover}
                        onChange={this.changeStars} />
            	</div>
                <div className="text-center">
                    &nbsp;{ level }&nbsp;
                </div>
            	<div className="color-grey">
            		<Input 
                        required
                        label="E-mail"
                        inputRef={ref => this.email = ref} />
            	</div>
            	<div className="color-grey">
            		<TextArea 
                        required
                        label="Mensagem"
                        inputRef={ref => this.message = ref} />
            	</div>
            	<div className="pt-3">
            		<BtnMain
        				className="font-weight-bold btn-outline btn-block"
        				onClick={this.props.onCancel}
        				title="Cancelar" />
            		<BtnMain
        				className="font-weight-bol btn-block"
        				onClick={this.sendComment}
        				title="Enviar" />
            	</div>
			</div>
        );
    }
}

export default CommentForm