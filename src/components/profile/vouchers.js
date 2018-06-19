import React, { Component } from 'react'
import CardVoucher from 'components/cards/voucher'

class Vouchers extends Component {
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