import React, { Component } from 'react'

class Feedback extends Component {
	render() {
		return (
			<div>
				<h4 className="mb-3">Revisão</h4>
				<div className="rounded bg-white p-4 mb-4">
					Você ainda não fez nenhuma revisão
				</div>
				<h4 className="mb-3">Feedback</h4>
				<div className="rounded bg-white p-4 mb-4">
					Você ainda não fez nenhum feedback
				</div>
			</div>
		)
	}
}

export default Feedback