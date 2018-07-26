import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { getNotifications } from 'actions/user'
import CardNotification from 'components/cards/notification'

class Notifications extends Component {

	componentWillMount() {
		store.dispatch(getNotifications())
	}

	printList = (item, i) => {
		item = {...item, type: 'attention'}
		return 	<CardNotification {...item} key={i} />
	}

	render() {
		return (
			<div>
				{this.props.user.notifications.map((item, i) => this.printList(item, i))}
			</div>
		)
	}
}

const mapStateToProps = state => 
	({
        user: {
        	notifications: state.user.notifications
        }
    })

export default connect(
    mapStateToProps
)(Notifications)