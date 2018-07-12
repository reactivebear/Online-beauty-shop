import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import CardVoucher from 'components/cards/voucher'

class StepThird extends Component {
    render() {
        return (
        	<div className="row pb-5">
        		<div className="col-sm-5">
                    <h4>Voucher do serviço</h4>
                    {/*<CardVoucher />*/}
        		</div>
                <div className="col-sm-1">
                </div>
        		<div className="col-sm-6">
        			<h4>Resumo do pedido</h4>
                    <ScheduleCartTotal value={this.props.cart.total} serviceId={this.props.service.id} step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            total: state.cart.total
        }
    })

export default connect(
    mapStateToProps
)(StepThird)