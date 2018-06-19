import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { getCart, getCartTotal } from 'actions/cart.js'
import ScheduleCartTotal from 'components/cards/schedule_cart_total'
import ServiceCart from 'components/cards/service_cart'
import { MONTH } from 'config' 
import Calendar from 'components/calendar'

class StepFirst extends Component {
    render() {
		const { product, service } = this.props.cart.list
        const { salon } = this.props.services
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        return (
        	<div className="row pb-5">
        		<div className="col-sm-6">
                    <h4>Meu carrinho</h4>
                    <div className="mb-3">
                        <ServiceCart {...this.props.service} salon={salon} />
                    </div>
                    <h4>{ MONTH[month] }, { year }</h4>
                    <Calendar year={year} month={month} />
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
        },
        services: {
            salon: state.services.salon
        }
    })

export default connect(
    mapStateToProps
)(StepFirst)