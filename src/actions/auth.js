import api from 'api'
import Cookies from 'js-cookie'
import * as types from './types.js'

export const loginAsGuest = () => dispatch => {
    return api.loginAsGuest()
    .then(json => {
        if (json.apikey) {
        	dispatch(setToken(json.apikey.key, json.user.guest))
            dispatch(setUser(json.user))
        }
    })
}

export const login = data => dispatch => {
    return api.login(data)
    .then(json => {
        if (json.apikey) {
            dispatch(setToken(json.apikey.key, json.user.guest))
            dispatch(setUser(json.user))
            return true
        }
    })
}

export const keepToken = () => dispatch => {
    return api.keepToken()
    .then(json => {
        if (json.apikey) {
            dispatch(setToken(json.apikey.key, json.user.guest))
            dispatch(setUser(json.user))
        }
    }).catch((error) =>
        dispatch(loginAsGuest())
    )
}

export const registration = data => dispatch => {
    return api.registration(data)
    .then(json => {
        console.log(json)
    })
}

export const setUser = data =>
    ({
        type: types.SET_USER,
        data
    })

export const setToken = (value, guest) => {
    Cookies.set('token', value)
    Cookies.set('guest', guest)
    return {
        type: types.SET_TOKEN,
        value,
        guest
    }
}