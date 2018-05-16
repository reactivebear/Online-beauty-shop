import React, { Component } from 'react'
import Search from 'components/search'
import BtnMain from 'components/buttons/btn_main.js'
import store from 'store'
import { toggleSideMenu } from 'actions/design.js'
import './style.css'

class Header extends Component {
    state = {dismissDownload: false}

    handleDismissClick = () => {
        this.setState ({ dismissDownload: true })
    }

    toggleSideMenu = state => e => {
        e.preventDefault()
        store.dispatch(toggleSideMenu(state))
    }

    render() {
        return (
            <div className="wrap-header">
                {  
                    ! this.state.dismissDownload 
                    ?   <div className="download-app-big p-5 d-sm-none">
                            <div className="d-block text-center text-white">
                                <div className="form-group">
                                    <strong>Use grátis o app do Visual Total</strong>
                                    <i onClick={this.handleDismissClick} className="fa fa-times float-right" aria-hidden="true"></i>
                                </div>
                                <div className="form-group">
                                    <span>Descubra a melhor experiência na hora de comprar pela internet</span>
                                </div>
                                <BtnMain
                                    className="btn-block"
                                    title="Baixar" />
                            </div>
                        </div>
                    :   ''
                }
                <div className="bg-dark effect6">
                    <div className="container text-white pt-4">
                        <div className="row pb-5">
                            <div className="col-xs-6 align-self-end">
                                <img src="assets/images/logo.png" alt="" className="img-fluid logo" />
                            </div>
                            <div className="col-xs-6 align-self-end text-right px-5">
                                <i className="fa fa-bars fa-2x d-sm-none" onClick={this.toggleSideMenu(true)} aria-hidden="true"></i>
                            </div>
                        </div>

                        <div className="row d-none d-sm-block">
                            <div className="col align-self-end">
                                <span>Hairtylist & Makeup</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Barber</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Depilation</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Spa & Massage</span>
                            </div>
                            <div className="col align-self-end">
                                <span>Esthetic Clinics</span>
                            </div>
                            <div className="col align-self-start">
                                <BtnMain
                                    title="Baixe grátis o app do Visual Total" />
                            </div>
                        </div>

                        <div className="form-group">
                            <Search />
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-6 form-group">
                                <img src="assets/icons/cart-icon.png" className="img-icon-header align-middle" />
                                <div className="align-middle d-inline-block px-3">
                                    Meu<br />
                                    <strong>Carrinho</strong>
                                </div>
                            </div>
                            <div className="col-xs-6 form-group">
                                Bem vindo<br />
                                <strong>Entre ou cadastre-se</strong>
                            </div>
                            <div className="col-xs-12 form-group">
                                <img src="assets/icons/pin-icon.png" className="img-icon-header align-middle" />
                                <div className="align-middle d-inline-block px-3">
                                    Enviar para<br />
                                    <strong>Bela Vista 01329900</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header