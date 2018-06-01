import React, { Component } from 'react'
import { history } from 'store'
import BtnMain from 'components/buttons/btn_main.js'
import CheckBox from 'components/inputs/checkbox.js'

class AddressCard extends Component {
	state = {
        active: false
    }

    changeDefaultAddress = item => e => {
        console.log(e.target.checked)
        console.log(item.id)
        this.setState({
            active: e.target.checked
        })
    }

    gotoAddress = (url, item) => e => {
        const state = item ? Object.assign({}, item, {defaultAddress: item.defaultAddress.checked}) : {}
        history.push(url, state)
    }

	render() {
		const item = this.props.item
		return (
            <div className="rounded p-3 bg-white">
                <div className="d-flex justify-content-between pb-3">
                    <div className="fs-18">
                        <h4>{ item.title }</h4>
                    </div>
                    <div className="w-35">
                        <div className="d-flex justify-content-center">
                            <div>
                            <CheckBox
                                title={this.state.active ? 'Principal' : 'Tornar Principal'}
                                vertical
                                value={item.principal}
                                onChange={this.changeDefaultAddress(item)}
                                inputRef={ref => item.defaultAddress = ref} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-bottom mb-3"></div>
                <div className="color-grey mb-2 fs-18">{`${item.street}, ${item.number}`}</div>
                <div className="color-grey mb-2 fs-18">{`${item.state}, ${item.city}, ${item.zipcode}`}</div>
                <div className="color-grey mb-2 fs-18">{`${item.country}`}</div>
                <div className="color-grey mb-3 fs-18">{`${item.phone}`}</div>
                <BtnMain
                    className="font-weight-bold btn-outline btn-block"
                    onClick={this.gotoAddress('edit', item)}
                    title="Editar" />
                <BtnMain
                    className="font-weight-bold btn-block"
                    onClick={this.gotoAddress('edit')}
                    title="Excluir" />
            </div>
        )
	}
}

export default AddressCard