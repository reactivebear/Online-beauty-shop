import React, { Component } from 'react'
import { NOTIFICATION_TYPE } from 'config'
import BtnMain from 'components/buttons/btn_main'

class CardNotification extends Component {
    render() {
    	const notify = {...NOTIFICATION_TYPE[this.props.type], desc: this.props.desc}
        return (
        	<div className="rounded bg-white border p-3 mb-3">
	            <div className="row justify-content-between align-items-sm-center">
	            	<div className="col-3 col-sm-2">
	            		<img src={notify.icon} alt="" className="img-fluid" />
	            	</div>
	            	<div className="col-9 col-sm-10 mb-2">
	            		<h4>{notify.title}</h4>
	            		<div className="border-bottom mb-2"></div>
	            		<div className="color-grey">
	            			{ notify.desc }
	            		</div>
	            	</div>
	            	<div className="col-12 col-sm-10 offset-sm-2">
	            		<div className="d-flex flex-wrap">
	            			<div className="col order-2 px-1 mb-2">
			            		<BtnMain
			        				className="btn-outline w-100 font-weight-bold"
			        				title="Lembrar mais tarde" />
	        				</div>
	        				<div className="col order-3 px-1 mb-2">
		        				<BtnMain
			        				className="btn-outline w-100 font-weight-bold"
			        				title="Excluir" />
	        				</div>
		            		{
		            			this.props.type === 'gift'
		            			? 	<div className="col order-4 order-sm-1 px-1">
				            			<BtnMain
					        				className="btn-outline w-100 font-weight-bold"
					        				title="Agradecer" />
			        				</div>
		            			: 	''
		            		}
        				</div>
	            	</div>
	            </div>
			</div>
        );
    }
}

export default CardNotification