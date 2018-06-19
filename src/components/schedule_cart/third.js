import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart.js'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import CardVoucher from 'components/cards/voucher'

class StepThird extends Component {
    render() {
		const { product, service } = this.props.cart.list
        
        return (
        	<div className="row pb-5">
        		<div className="col-sm-5">
                    <h4>Voucher do serviço</h4>
                    <CardVoucher />
        		</div>
                <div className="col-sm-1">
                </div>
        		<div className="col-sm-6">
        			<h4>Resumo do pedido</h4>
                    <ScheduleCartTotal value={this.props.cart.total} step={this.props.step} />
        		</div>
        	</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        cart: {
            list: state.cart.list,
            total: state.cart.total
        }
    })

export default connect(
    mapStateToProps
)(StepThird)