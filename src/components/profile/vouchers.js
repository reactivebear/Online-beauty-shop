import React, { Component } from 'react'
import CardVoucher from 'components/cards/voucher'
import store from 'store'
import { getVouchers } from 'actions/user'

class Vouchers extends Component {
	componentWillMount() {
		store.dispatch(getVouchers())
	}

	printList = (item, i) => {
		return 	<div key={i} className="col-lg-6 mb-3">
					<CardVoucher buttons />
				</div>
	}

	render() {
		const list = ['', '']
		return (
			<div className="row">
				{ list.map((item, i) => this.printList(item, i)) }
			</div>
		)
	}
}

export default Vouchers