import React, { Component } from 'react'
import './steps_round.css'

class StepsRound extends Component {
	printList = (item, i) => {
		const activeClass = i + 1 <= this.props.active ? 'active' : ''
		const title = i + 1 === this.props.active ? <b>{item}</b> : item
		return  <div key={i} className="wrap-point position-relative">
	            	<div onClick={this.props.onClick(i+1)} className={`steps-point p-2 border-green pointer ${activeClass}`}></div>
	            	<div className="position-absolute point-text text-sm-nowrap text-sm-left pt-1">{title}</div>
            	</div>
	}
    render() {
    	const activeClass = `active-${this.props.active}`
    	const steps = ['Pedido efetuado', 'Processando', 'Em transporte', 'Produto entregue']
        return (
    		<div className="wrap-wrap-steps px-sm-5 px-3 py-5">
	            <div className={`${activeClass} wrap-steps-round d-flex justify-content-between align-items-center position-relative`}>
	            	{ steps.map((item, i) => this.printList(item, i)) }
	            </div>
            </div>
        );
    }
}

export default StepsRound