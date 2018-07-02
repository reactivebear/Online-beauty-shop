import React, { Component } from 'react'
import { connect } from 'react-redux'
import BtnMain from 'components/buttons/btn_main'
import { format } from 'utils/mask'

class ZipForm extends Component {
    openLogin = e => {
        e.stopPropagation()
        this.props.openAnother('login')
    }

    checkMask = (mask, field) => e => {
        this[field].value = format(mask, e.target.value)
    }

    render() {
        return (
        	<div>
                {
                    this.props.user.guest
                    ?   <div>
                            <div className="color-grey mb-3">
                                Busque por serviços mais próximos de você as opções e velocidade de entrega podem variar de acordo com a região
                            </div>
                            <div className="mb-3">
                                <BtnMain
                                    className="font-weight-bold btn-block"
                                    onClick={this.openLogin}
                                    title="Fazer login" />
                            </div>
                            <div className="text-center mb-3">
                                <div className="side-line position-relative">
                                    <div className="color-grey bg-white position-relative z-index-2 d-inline px-2">ou insira um cep</div>
                                </div>
                            </div>
                        </div>
                    :   ''
                }
                    
            	<div className="d-flex align-items-center">
                    <input 
                        type="text"
                        placeholder="00000"
                        onChange={this.checkMask('digits-5', 'zip')}
                        className="form-control mr-2 w-35"
                        ref={ref => this.zip = ref}
                        defaultValue={''} />
                    <input 
                        type="text"
                        placeholder="000"
                        onChange={this.checkMask('digits-3', 'cep')}
                        className="form-control mr-2 w-25"
                        ref={ref => this.cep = ref}
                        defaultValue={''} />
            		<BtnMain
        				className="font-weight-bold btn-outline w-40 pt-2"
        				title="Buscar" />
            		
            	</div>
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        user: {
            guest: state.user.guest,
            }
    })

export default connect(
    mapStateToProps
)(ZipForm)