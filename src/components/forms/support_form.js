import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main'
import { format } from 'utils/mask'
import Input from 'components/inputs/input'
import TextArea from 'components/inputs/textarea'

class SupportForm extends Component {
    constructor(props) {
        super(props)
        this.support = {}
    }

    checkMask = (mask, field) => e => {
        this.support[field].value = format(mask, e.target.value)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <Input 
                            required
                            label="Nome"
                            value={''}
                            onChange={this.checkMask('alphabet', 'first_name')}
                            inputRef={ref => this.support.first_name = ref} />
                        <Input 
                            required
                            label="E-mail"
                            type="email"
                            value={''}
                            onChange={this.checkMask('email', 'email')}
                            inputRef={ref => this.support.email = ref} />
                        <div className="row">
                            <div className="col-md-6">
                                <Input 
                                    required
                                    label="Telefone"
                                    value={''}
                                    onChange={this.checkMask('phone', 'phone')}
                                    inputRef={ref => this.support.phone = ref} />
                            </div>
                            <div className="col-md-6">
                                <Input 
                                    required
                                    label="Celular"
                                    value={''}
                                    onChange={this.checkMask('phone', 'celular')}
                                    inputRef={ref => this.support.celular = ref} />
                            </div>
                        </div>
                        <TextArea 
                            required
                            label="Mensagem"
                            inputRef={ref => this.support.message = ref} />
                    </div>
                
                    <div className="col-sm-8 offset-sm-2">
                		<BtnMain
            				className="font-weight-bold btn-block pt-2"
            				title="Enviar mensagem" />
                    </div>
    			</div>
            </div>
        );
    }
}

export default SupportForm