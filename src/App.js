import React, { Component } from 'react';
import './App.css';
import Navbar from './components/templates/CustomNavbar';
import Footer from './components/templates/Footer';
import {StorageKeys} from "./utils/storagekeys";
import {Api} from "./api/api";
import * as pages from './containers'
import { Route, Switch } from 'react-router-dom'
import routing from 'config/route.js'
import { connect } from 'react-redux'
import store from 'store'
import { loginAsGuest, setToken } from 'actions'


class App extends Component {
    constructor(props) {
        super(props)
        if (!this.props.user.token) {
            store.dispatch(loginAsGuest())
        } else {
            store.dispatch(setToken(this.props.user.token))
        }
    }

    printRoutes = (route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />

    componentDidMount() {
        const apiKeyString = localStorage.getItem(StorageKeys.APIKEY);

        if (apiKeyString) {
            Api.setApiKey(apiKeyString);
            Api.keepToken()
            .catch(Api.loginAsGuest);
        } else {
            Api.loginAsGuest();
        }
    }

    render() {
        const { token } = this.props.user
        const key = token ? 'private' : 'public'
        const routes = routing[key]
        
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    { routes.map((route, i) => this.printRoutes(route, i)) }
                </Switch>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: {
            token: state.user.token
        }
    }
}

export default connect(
    mapStateToProps
)(App)

