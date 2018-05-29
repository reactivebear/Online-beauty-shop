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
                                <img src="/assets/images/default-avatar.png" className="img-fluid" style={{height: 85}} alt="" />
                            </div>
                        </div>
                        <div className="col text-right align-self-center">
                            <img src="/assets/icons/close-icon.png" onClick={this.toggleSideMenu} className="img-icon" alt="" />
                        </div>
                        <div className="col-12">
                            <h2>Igor dos Anjos</h2>
                        </div>
                    </div>

                    <div className="mb-5 pt-5">
                        <div className="px-5 py-3">
                            <img src="/assets/icons/user-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/profile">Minha Conta</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/list-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/wishlist">Lista de desejos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/vaucher-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/vouchers">Vouchers</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/credits-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/credits">Créditos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/book-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/schedules">Agendamentos</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/product-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/purchased">Produtos comprados</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/bell-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/notifications">Notificações</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/doc-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/feedback">Refeição e feedback</Link>
                        </div>
                        <div className="px-5 py-3">
                            <img src="/assets/icons/support-icon.png" alt="" className="img-icon" />
                            <Link className="pl-5" to="/support">Suporte</Link>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="px-5 py-3">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <span className="pl-5 pointer">Login</span>
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