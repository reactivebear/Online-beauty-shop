import React, { Component } from 'react'
import Search from 'components/search'
import BtnMain from 'components/buttons/btn_main.js'
import store from 'store'
import { toggleSideMenu } from 'actions/design.js'
import Tooltip from 'components/tooltip'
import CartHeader from 'components/cart/cart_header.js'
import './style.css'

class Header extends Component {
    state = {
        dismissDownload: false,
        tooltip: false
    }

    handleDismissClick = () => {
        this.setState({ dismissDownload: true })
    }

    toggleSideMenu = state => e => {
        e.preventDefault()
        store.dispatch(toggleSideMenu(state))
    }

    closeTooltip = e => {
        if (! e.target.id && ! e.target.closest('#child')) {
            this.setState({tooltip: false})
            document.body.removeEventListener('click', this.closeTooltip)
        }
    }

    toggleTooltip = type => e => {
        e.stopPropagation()
        if (type == this.state.tooltip || ! e.target.id) {
            this.setState({tooltip: false})
            document.body.removeEventListener('click', this.closeTooltip)
        } else {
            this.setState({tooltip: type})
            document.body.addEventListener('click', this.closeTooltip)
        }
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
                        <div className="row pb-5 d-sm-none">
                            <div className="col-6 align-self-end">
                                <img src="/assets/images/logo.png" alt="" className="img-fluid logo" />
                            </div>
                            <div className="col-6 align-self-end text-right px-5">
                                <i className="fa fa-bars fa-2x" onClick={this.toggleSideMenu(true)} aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="d-none d-sm-flex align-items-end justify-content-between mb-3">
                                    <div>
                                        <img src="/assets/images/logo.png" alt="" className="img-fluid" />
                                    </div>
                                    <div>
                                        <a href="javascript:;" className="text-white">Hairtylist & Makeup</a>
                                    </div>
                                    <div>
                                        <a href="javascript:;" className="text-white">Barber</a>
                                    </div>
                                    <div>
                                        <a href="javascript:;" className="text-white">Depilation</a>
                                    </div>
                                    <div className="text-white">
                                        <a href="javascript:;" className="text-white">Spa & Massage</a>
                                    </div>
                                    <div>
                                        <a href="javascript:;" className="text-white">Esthetic Clinics</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Search />
                                </div>
                            </div>
                        
                            <div className="col-sm-5">
                                <div className="row align-items-end h-100">
                                    <div className="d-none d-sm-block col-12 order-sm-first align-self-start text-right">
                                        <BtnMain
                                            title="Baixe grátis o app do Visual Total" />
                                    </div>
                                    <div onClick={this.toggleTooltip('cart')} id="cart" className="col-6 col-sm-3 px-sm-0 form-group pointer">
                                        <img src="/assets/icons/cart-icon.png" id="cart" className="img-icon-header align-middle" />
                                        <div className="align-middle d-inline-block px-3" id="cart">
                                            Meu<br />
                                            <strong id="cart">Carrinho</strong>
                                        </div>
                                        {
                                            this.state.tooltip == 'cart'
                                            ?   <Tooltip title="Adicionado ao seu carrinho" content={CartHeader} close={() => this.setState({tooltip: false})} />
                                            :   ''
                                        }
                                    </div>
                                    <div onClick={this.toggleTooltip('login')} id="login" className="col-6 col-sm-4 px-sm-0 form-group pointer">
                                        Bem vindo<br />
                                        <strong id="login">Entre ou cadastre-se</strong>
                                        {
                                            this.state.tooltip == 'login'
                                            ?   <Tooltip title="login" />
                                            :   ''
                                        }
                                    </div>
                                    <div onClick={this.toggleTooltip('zip')} id="zip" className="col-12 col-sm-5 px-sm-0 order-sm-first form-group pointer">
                                        <img src="/assets/icons/pin-icon.png" id="zip" className="img-icon-header align-middle" />
                                        <div className="align-middle d-inline-block px-3" id="zip">
                                            Enviar para<br />
                                            <strong id="zip">Bela Vista 01329900</strong>
                                        </div>
                                        {
                                            this.state.tooltip == 'zip'
                                            ?   <Tooltip title="zip" />
                                            :   ''
                                        }
                                    </div>
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