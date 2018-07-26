import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import CardVoucher from 'components/cards/voucher'
import { getLang } from 'utils/lang'

class StepThird extends Component {
    render() {
        return (
        	<div className="row pb-5">
        		<div className="col-sm-5">
                    <h4>{getLang('Voucher do serviço')}</h4>
                    <CardVoucher {...this.props.schedule_cart.voucher} />
        		</div>
                <div className="col-sm-1">
                </div>
        		<div className="col-sm-6">
        			<h4>{getLang('Resumo do pedido')}</h4>
                    <ScheduleCartTotal value={this.props.cart.total} serviceId={this.props.service.id} step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            total: state.cart.total,
            
        },
        schedule_cart: {
            voucher: state.schedule_cart.voucher
        }
    })

export default connect(
    mapStateToProps
)(StepThird)