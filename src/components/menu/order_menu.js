import React, { Component } from 'react'
import { DROP_LIST } from 'config'
import './style.css'

class OrderMenu extends Component {
	printList = (item, i) => {
		return <div className="p-4 bg-white pointer border" key={i}>{item}</div>
	}

    render() {
        return (
        	<div className="wrap-order-menu">
	            { DROP_LIST.map((item, i) => this.printList(item, i)) }
			</div>
        );
    }
}

export default OrderMenu