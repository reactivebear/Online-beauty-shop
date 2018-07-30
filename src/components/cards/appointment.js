import React, { Component } from 'react'
import store from 'store'
import Price from 'components/price'
import BtnMain from 'components/buttons/btn_main'
import ImagePreview from 'components/images/preview'
import { Link } from 'react-router-dom'
import { toggleModal } from 'actions/design'
import { getLang } from 'utils/lang'

class CardAppointment extends Component {
	cancel = () => {
		store.dispatch(toggleModal(true, this.confirmCancel, 'modal-sm text-center', 'Cancelar agendamento', {position: 'center'}))
	}

	confirmCancel = props => {
		return  <div className="text-center">
                    <div className="mb-3">{getLang('Após o cancelamento o valor será convertido em créditos e você perderá 15% do valor.')}</div>
                    <div className="mb-3 color-red">{getLang('Está operação não pode ser revertida')}</div>
                    <BtnMain
                        className="btn-block font-weight-bold btn-outline"
                        onClick={() => props.onCancel()}
                        title="Não cancelar" />
                    <BtnMain
                        className="btn-block font-weight-bold"
                        onClick={() => props.onCancel()}
                        title="Cancelar" />
                </div>
	}

    render() {
        return (
        	<div className="rounded bg-white border p-2 mb-3 h-100">
	            <div className="row">
	            	<div className="col-sm-5">
	            		<ImagePreview images={''} />
            		</div>
            		<div className="col-sm-7">
            			<div className="d-flex align-items-start flex-column h-100">
            				<div>
		            			<div>Massage & Ofuro - Premium</div>
		        				<span className="color-grey">{getLang('Vendido e realizado por')}</span><br />
		        				<Link to={`salon/1`} className="color-green">GoodLook Salon</Link>
	        				</div>
	        				<div className="mt-auto mb-4">
	        					<Price current={159.50} />
        					</div>
        				</div>
            		</div>
            	</div>
            	<div className="row mb-2">
            		<div className="col-md-6 mb-2">
            			<div className="color-grey">{getLang('Profissional')}:</div>
            			<div>{getLang('Margarette Reis')}</div>
            		</div>
            		<div className="col-md-6">
            			<div className="color-grey">{getLang('Agendamento')}:</div>
            			<div>02/03/2018 às 11:45</div>
            		</div>
            	</div>
            	<div className="border-bottom mb-2"></div>
            	<div className="color-grey">{getLang('Contato')}:</div>
            	<div className="mb-2">(11) 96162-1832</div>
            	<div className="color-grey">{getLang('Local')}:</div>
            	<div className="mb-2">Rua Diogo jacome, 447 Villa Nova Conceição</div>
            	<div className="color-grey">E-mail:</div>
            	<div className="mb-2">goodlooksalon@gmail.com</div>

            	<div className="row mb-2">
            		<div className="col-sm-6">
            			<div className="color-grey">{getLang('Validade')}:</div>
            			<div>09/03/2018 às 10:15</div>
            			<sup className="color-grey">(30 {getLang('dias')})</sup>
            		</div>
            		<div className="col-sm-6">
            			<div className="color-grey">ID:</div>
            			<div>#032214548</div>
            		</div>
            	</div>

            	<div>
	            	<BtnMain
        				className="btn-block font-weight-bold btn-outline"
        				onClick={this.cancel}
        				title="Cancelar agendamento" />
				</div>
			</div>
        );
    }
}

export default CardAppointment