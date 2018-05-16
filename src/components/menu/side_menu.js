import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { Link } from 'react-router-dom'
import { toggleSideMenu } from 'actions/design.js'
import './style.css'

class SideMenu extends Component {
    toggleSideMenu = () => {
        store.dispatch(toggleSideMenu(false))
    }

    render() {
        const activeClass = this.props.design.sideMenu ? 'active' : ''
        return (
            <div className={"text-white wrap-side-menu " + activeClass}>
                    <div className="row pt-55 px-5 mb-5">
                        <div className="col">
                            <div className="form-group">
                                <img src="assets/images/default-avatar.png" className="img-fluid" style={{height: 85}} alt="" />
                            </div>
                        </div>
                        <div className="col text-right align-self-center">
                            <img src="assets/icons/close-icon.png" onClick={this.toggleSideMenu} className="img-icon" />
                        </div>
                        <div className="col-xs-12">
                            <h2>Igor dos Anjos</h2>
                        </div>
                    </div>

                    <div className="mb-5 pt-5">
                        <div className="px-5 py-3">
                            <img src="assets/icons/user-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Minha Conta</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/list-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Lista de desejos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/vaucher-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Vouchers</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/credits-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Créditos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/book-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Agendamentos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/product-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Produtos comprados</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/bell-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Notificações</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/doc-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Refeição e feedback</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="assets/icons/support-icon.png" className="img-icon" />
                            <Link className="pl-5" to="/about">Suporte</Link>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="px-5 py-3">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <a href="javascript:;" className="pl-5">Login</a>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        design: {
            sideMenu: state.design.sideMenu
        }
    }
}

export default connect(
    mapStateToProps
)(SideMenu)