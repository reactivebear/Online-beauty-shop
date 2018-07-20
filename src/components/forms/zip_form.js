import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { history } from 'store'
import { getLocation } from 'actions'
import BtnMain from 'components/buttons/btn_main'
import { format } from 'utils/mask'
import { getMyPosition } from 'utils'

class ZipForm extends Component {
    openLogin = e => {
        e.stopPropagation()
        this.props.openAnother('login')
    }

    checkMask = (mask, field) => e => {
        this[field].value = format(mask, e.target.value)
    }

    search = () => {
        history.push(`/search#type=services&search_text=`)
        this.props.close()
    }

    getLocation = () => {
        store.dispatch(getLocation(`${this.zip.value}${this.cep.value}`))
    }

    nearbySearch = pos => {
        let location = ''
        if (this.props.user.location.lat &&this.props.user.location.lng) {
            location = `&latitude=${this.props.user.location.lat}&longitude=${this.props.user.location.lng}`
            history.push(`/search#type=${this.props.search.type}&search_text=${this.props.search.query}${location}`)
            this.props.close()
        }
    }

    render() {
        const zipcode = this.props.user.data.main_address.zipcode || ''
        return (
        	<div>
                {
                    this.props.user.guest
                    ?   <div>
                            <div className="color-grey mb-3">
                                Busque por serviços mais próximos de você as opções e velocidade de entrega podem variar de acordo com a região
                            </div>
                            <div className="mb-3">
                                <BtnMain
                                    className="font-weight-bold btn-block"
                                    onClick={this.openLogin}
                                    title="Fazer login" />
                            </div>
                            <div className="text-center mb-3">
                                <div className="side-line position-relative">
                                    <div className="color-grey bg-white position-relative z-index-2 d-inline px-2">ou insira um cep</div>
                                </div>
                            </div>
                        </div>
                    :   ''
                }
                    
            	<div className="d-flex align-items-center mb-4">
                    <input 
                        type="text"
                        placeholder="00000"
                        onChange={this.checkMask('digits-5', 'zip')}
                        className="form-control mr-2 w-35"
                        ref={ref => this.zip = ref}
                        defaultValue={zipcode.slice(0,5)} />
                    <input 
                        type="text"
                        placeholder="000"
                        onChange={this.checkMask('digits-3', 'cep')}
                        className="form-control mr-2 w-25"
                        ref={ref => this.cep = ref}
                        defaultValue={zipcode.slice(5)} />
            		<BtnMain
        				className="font-weight-bold btn-outline w-40 pt-2"
                        onClick={this.getLocation}
        				title="Buscar" />
            		
            	</div>
                <div className="border-bottom mb-4"></div>
                {
                    !this.props.user.guest
                    ?   <BtnMain
                            className="font-weight-bold pt-2 btn-block"
                            onClick={this.nearbySearch}
                            title="Utilizar a minha localização" />
                    :   ''
                }
			</div>
        );
    }
}

const mapStateToProps = state =>
    ({
        user: {
            guest: state.user.guest,
            data: state.user.data,
            location: state.user.location
        },
        search: state.search
    })

export default connect(
    mapStateToProps
)(ZipForm)