import React, { Component } from 'react'
import routing from 'config/route.js'
import store, { history } from 'store'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import 'App.css'
import Footer from 'components/footer'
import * as pages from './containers'
import { loginAsGuest, keepToken } from 'actions/auth.js'
import { setLocation, toggleSideMenu } from 'actions/design.js'
import Header from 'components/header'
import SideMenu from 'components/menu/side_menu.js'
import LeftMenu from 'components/menu/left_menu.js'
import Modal from 'components/modal'
import Alert from 'components/alert'
import Viewer from 'components/images/viewer'

class App extends Component {
    constructor(props) {
        super(props)
        if (!this.props.user.token) {
            store.dispatch(loginAsGuest())
        } else {
            store.dispatch(keepToken(this.props.user.token))
        }

        history.listen((location, action) => {
            store.dispatch(setLocation(location.pathname))
            if (this.props.design.sideMenu) {
                store.dispatch(toggleSideMenu(false))
            }
            window.scrollTo(0, 0)
        })
    }

    printRoutes = (route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />

    render() {
        const { token, approve_token } = this.props.user
        const key = token ? 'private' : 'public'
        const routes = routing[key]
        const unactiveClass = this.props.design.sideMenu ? 'unactive' : ''
        return (
            <div className="App">
                {
                    approve_token
                    ?   <div>
                            <div className={'main-wrap ' + unactiveClass}>
                                <Header />
                                <Switch>
                                    { routes.map((route, i) => this.printRoutes(route, i)) }
                                </Switch>
                                <Footer />
                            </div>
                            <SideMenu />
                            <LeftMenu />
                            <Modal />
                            <Alert />
                            <Viewer />
                        </div>
                    :   ''
                }
            </div>
        )
    }
}

const mapStateToProps = state =>
    ({
        user: {
            token: state.user.token,
            guest: state.user.guest,
            approve_token: state.user.approve_token,
        },
        design: {
            sideMenu: state.design.sideMenu
        }
    })

export default connect(
    mapStateToProps
)(App)

