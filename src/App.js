import React, { Component } from 'react'
import 'App.css'
import Footer from 'components/footer'
import * as pages from './containers'
import { Route, Switch } from 'react-router-dom'
import { history } from 'store'
import routing from 'config/route.js'
import { connect } from 'react-redux'
import store from 'store'
import { loginAsGuest, keepToken } from 'actions/auth.js'
import Header from 'components/header'
import SideMenu from 'components/menu/side_menu.js'
import Modal from 'components/modal'


class App extends Component {
    constructor(props) {
        super(props)
        if (!this.props.user.token) {
            store.dispatch(loginAsGuest())
        } else {
            store.dispatch(keepToken(this.props.user.token))
        }

        history.listen((location, action) => {
            
        })
    }

    printRoutes = (route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />

    render() {
        const { token } = this.props.user
        const key = token ? 'private' : 'public'
        const routes = routing[key]
        const unactiveClass = this.props.design.sideMenu ? 'unactive' : ''
        
        return (
            <div className="App">
                <div className={'main-wrap ' + unactiveClass}>
                    <Header />
                    <Switch>
                        { routes.map((route, i) => this.printRoutes(route, i)) }
                    </Switch>
                    <Footer />
                </div>
                <SideMenu />
                <Modal />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: {
            token: state.user.token
        },
        design: {
            sideMenu: state.design.sideMenu
        }
    }
}

export default connect(
    mapStateToProps
)(App)

