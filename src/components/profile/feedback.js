import React, { Component } from 'react'
import CardReview from 'components/cards/review'
import CardFeedback from 'components/cards/feedback'
import { getLang } from 'utils/lang'

class Feedback extends Component {
	printReviews = (item, i) => {
		return 	<div key={i} className="col-lg-6 mb-3">
					<CardReview />
				</div>
	}

	printFeedbacks = (item, i) => <CardFeedback />

	render() {
		const listReview = ['', '']
		const listFeedback = ['']
		return (
			<div>
				<h4 className="mb-3">{getLang('Revisão')}</h4>
				{
					listReview.length
					?	<div className="row">{ listReview.map((item, i) => this.printReviews(item, i)) }</div>
					: 	<div className="rounded bg-white p-4 mb-4">
							{getLang('Você ainda não fez nenhuma revisão')}
						</div>
				}
				<h4 className="mb-3">{getLang('Feedback')}</h4>
				{
					listFeedback.length
					? 	listFeedback.map((item, i) => this.printFeedbacks(item, i))
					: 	<div className="rounded bg-white p-4 mb-4">
							{getLang('Você ainda não fez nenhuma revisão')}
						</div>
				}
			</div>
		)
	}
}

export default Feedback