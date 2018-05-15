import api from 'api'
import Cookies from 'js-cookie'
import * as types from './types.js'

export function loginAsGuest() {
    return dispatch => {
        return api.loginAsGuest()
        .then(json => {
            if (json.apikey) {
            	dispatch(setToken(json.apikey.key))
            }
        })
    }
}

export function setToken(value) {
    Cookies.set('token', value)
    return {
        type: types.SET_TOKEN,
        value
    }
}

export function getCategories(token) {
    return dispatch => {
        return api.getCategories(token)
        .then(json => {
            if (json.data) {

            }
        })
    }
}