import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from 'store'
import BtnMain from 'components/buttons/btn_main.js'
import AddressCard from 'components/cards/address.js'

class AddressList extends Component {
    
    componentWillMount() {
        [, , this.type] = history.location.pathname.split('/')
    }

    printList = (item, i) =>
        (
            <div key={i} className="col-sm-6">
                <AddressCard item={item} />
            </div>
        )

	render() {
        let list = []
        let nameButton
        switch (this.type) {
            case 'address':
                list = this.props.user.data.addresses
                nameButton = 'Adicionar endereço'
                break
            case 'cards':
                list = this.props.user.data.cards
                nameButton = 'Novo Cartão'
                break
            default: return
        }
        
		return (
			<div className="row">
			    <div className="col-12 col-sm-6">
                    <BtnMain
                        className="font-weight-bold btn-outline btn-block"
                        onClick={() => history.push('add')}
                        title={nameButton} />
                </div>
                <div className="col-12 mb-3"></div>
                { list.map((item, i) => this.printList(item, i)) }
			</div>
		)
	}
}

const mapStateToProps = state => 
	({
        user: {
        	data: {
        		addresses: state.user.data.addresses,
                cards: state.user.data.billing_addresses
        	}
        }
    })

export default connect(
    mapStateToProps
)(AddressList)