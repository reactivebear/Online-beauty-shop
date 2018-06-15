import React, { Component } from 'react'
import BtnMain from 'components/buttons/btn_main'
import { format } from 'utils/mask'

class About extends Component {
	checkMask = (mask, field) => e => {
        this.phone.value = format(mask, e.target.value)
    }

    render() {
        return (
        	<div className="bg-main font-avenir pt-5 h-75">
        		<div className="container">
        			<div className="row justify-content-center">
	        			<div className="col-xl-6 col-md-7 col-sm-10 col-12">
	        				<div className="row">
		        				<div className="col-xl-9 col-lg-9 col-md-12 mb-4">
				        			<div className="text-white font-avenir-light fs-38 mb-3">Baixe grátis o app do<br />Visual Total</div>
				        			<div className="text-white mb-3">Não importa onde você está: busque, compra e venda tudo o que quiser pelo seu celular.</div>
				        			<div className="d-flex align-items-center">
				        				<div className="w-40 pr-1 mr-2">
				        					<img src="/assets/images/google-play.png" alt="" className="img-fluid" />
			        					</div>
			        					<div className="w-40 pr-1">
				        					<img src="/assets/images/app-store.png" alt="" className="img-fluid" />
				        				</div>
				        			</div>
			        			</div>
		        			</div>
		        			
							<div className="d-flex mb-2">
								<div class="input-group pr-2">
									<div class="input-group-prepend">
										<span className="input-group-text bg-white">
											<img src="/assets/images/brasil.png" alt="" className="img-fluid img-icon-header" />
											&nbsp; [+55]
										</span>
									</div>
								  	<input 
								  		type="text" class="form-control" 
								  		onChange={this.checkMask('phone', 'phone')}
								  		placeholder="(11)96132-1852"
			                            ref={ref => this.phone = ref} />
								</div>
								<BtnMain
									className="btn-outline px-4"
									title="Enviar" />
							</div>
							<div className="text-center px-5">
								Para receber um link para baixar sem custo por SMS adicione o seu telefone
							</div>
						</div>
					</div>
        		</div>
			</div>
        );
    }
}

export default About