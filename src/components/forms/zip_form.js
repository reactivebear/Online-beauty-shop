import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main.js'

class ZipForm extends Component {
    render() {
        return (
        	<div>
                <div className="color-grey mb-3">
                    Busque por serviços mais próximos de você as opções e velocidade de entrega podem variar de acordo com a região
                </div>
                <div className="mb-3">
                    <BtnMain
                        className="font-weight-bold btn-block"
                        title="Fazer login" />
                </div>
                <div className="text-center mb-3">
                    <div className="side-line position-relative">
                        <div className="color-grey bg-white position-relative z-index-2 d-inline px-2">ou insira um cep</div>
                    </div>
                </div>
            	<div className="d-flex align-items-center">
                    <input 
                        type="text"
                        placeholder="04850"
                        className="form-control mr-2 w-35"
                        ref={ref => this.zip = ref}
                        defaultValue={''} />
                    <input 
                        type="text"
                        placeholder="150"
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

export default ZipForm