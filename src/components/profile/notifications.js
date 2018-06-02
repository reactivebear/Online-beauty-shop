import React, { Component } from 'react'
import CardNotification from 'components/cards/notification.js'

class Notifications extends Component {
	printList = (item, i) => <CardNotification {...item} key={i} />

	render() {
		const list = [
			{
				type: 'attention',
				desc: 'teste teste teste teste'
			}, {
				type: 'reminder',
				desc: 'teste teste teste teste'
			}, {
				type: 'review',
				desc: 'teste teste teste teste'
			}, {
				type: 'credits',
				desc: 'teste teste teste teste'
			}, {
				type: 'products',
				desc: 'teste teste teste teste'
			}, {
				type: 'gift',
				desc: 'teste teste teste teste'
			},

		]
		return (
			<div>
				{list.map((item, i) => this.printList(item, i))}
			</div>
		)
	}
}

export default Notifications