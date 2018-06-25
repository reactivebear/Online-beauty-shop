import React, { Component } from 'react'
import Input from 'components/inputs/input'
import BtnMain from 'components/buttons/btn_main'

class Recovery extends Component {

	recovery = () => {

	}

    render() {
        return (
        	<div className="bg-main font-avenir pt-5">
        		<div className="container">
		            <div className="row">
		            	<div className="col-md-6">
			    			<div className="rounded p-4 bg-white border mb-5">
			    				<h4>Trocar a senha</h4>
			    				<div className="color-grey mb-2">Identifique-se para receber um e-mail com as instruções e o link para criar uma nova senha.</div>
			    				<Input 
			                        required
			                        label="Email"
			                        inputRef={ref => this.email = ref} />
		                        <div className="row justify-content-center">
		                        	<div className="col-lg-8">
				                        <BtnMain
		                                    className="font-weight-bold btn-block"
		                                    onClick={this.recovery}
		                                    title="Salvar" />
                                    </div>
                                </div>
			    			</div>
		            	</div>
		            </div>
	            </div>
			</div>
        );
    }
}

export default Recovery