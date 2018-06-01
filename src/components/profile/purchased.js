import React, { Component } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getPurchases } from 'actions/user.js'
import CardPurchase from 'components/cards/purchase.js'
import { PurchasePage } from 'components/profile'

class Purchased extends Component {
	componentWillMount() {
		store.dispatch(getPurchases())
	}

	printList = (item, i) => {
		return <div key={i} className="col-sm-6 mb-3"><CardPurchase {...item} /></div>
	}

	getPurchasesList = () => {
		return <div className="row align-items-strech">{ this.props.user.purchases.map((item, i) => this.printList(item, i)) }</div>
	}

	getPurchase = () => {
		return this.props.user.purchases.find(item => item.id === this.props.match.params.id * 1)
	}

	render() {
		return (
			<div>
				<Switch>
    				<Route path="/purchased" exact render={() => this.getPurchasesList()} />
    				<Route path="/purchased/:id" exact render={props => <PurchasePage {...props} purchase={this.getPurchase()}/>} />
				</Switch>
				
			</div>
		)
	}
}

const mapStateToProps = state => 
	({
        user: {
        	purchases: state.user.purchases
        }
    })

export default connect(
    mapStateToProps
)(Purchased)