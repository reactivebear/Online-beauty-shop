import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { Link } from 'react-router-dom'
import { toggleSideMenu } from 'actions/design.js'
import { logout } from 'actions/auth'
import { LoginForm } from 'components/forms'
import { LIST_MENU } from 'config'
import './style.css'

class SideMenu extends Component {
    toggleSideMenu = () => {
        store.dispatch(toggleSideMenu(false))
    }

    printMenu = (item, i) => {
        return  <div key={i} className="px-5 py-3">
                    <img src={`/assets/icons/${item.icon_white}`} alt="" className="img-icon" />
                    <Link className="pl-5" to={item.url}>{item.title}</Link>
                </div>
    }

    logout = () => {
        store.dispatch(logout())
    }

    render() {
        const activeClass = this.props.design.sideMenu ? 'active' : ''
        return (
            <div className={"text-white wrap-side-menu " + activeClass}>
                    {
                        this.props.user.guest
                        ?   <div className="pt-55 px-5 mb-5">
                                <div className="col text-right align-self-center">
                                    <img src="/assets/icons/close-icon.png" onClick={this.toggleSideMenu} className="img-icon" alt="" />
                                </div>
                                <LoginForm {...[this.toggleSideMenu]} />
                            </div>
                        :   <div>
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
                                    {
                                        LIST_MENU.map((item, i) => this.printMenu(item, i))
                                    }
                                </div>
                                <div className="py-5">
                                    <div className="px-5 py-3">
                                        <i className="fa fa-power-off" aria-hidden="true"></i>
                                        <span className="pl-5 pointer" onClick={this.logout}>Logout</span>
                                    </div>
                                </div>
                            </div>
                    }
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        user: {
            guest: state.user.guest,
        },
        design: {
            sideMenu: state.design.sideMenu
        }
    })

export default connect(
    mapStateToProps
)(SideMenu)