import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardVoucher from 'components/cards/voucher'
import store from 'store'
import { getVouchers } from 'actions/user'

class Vouchers extends Component {
	componentWillMount() {
		store.dispatch(getVouchers())
	}

	printList = (item, i) => {
		return 	<div key={i} className="col-lg-6 mb-3">
					<CardVoucher {...item} buttons />
				</div>
	}

	render() {
		return (
			<div className="row">
				{ this.props.user.vouchers.map((item, i) => this.printList(item, i)) }
			</div>
		)
	}
}

const mapStateToProps = state => 
	({
        user: {
        	vouchers:  state.user.vouchers
        }
    })

export default connect(
    mapStateToProps
)(Vouchers)