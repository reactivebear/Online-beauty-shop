import api from 'api'
import Cookies from 'js-cookie'
import * as types from './types.js'
import { getCategories } from 'actions'

export const loginAsGuest = () => dispatch => {
    return api.loginAsGuest()
    .then(json => {
        if (json.apikey) {
        	dispatch(setToken(json.apikey.key))
            dispatch(setUser(json.user))
        }
    })
}

export const keepToken = () => dispatch => {
    return api.keepToken()
    .then(json => {
        /*if (json.apikey) {
            dispatch(setToken(json.apikey.key))
        }*/
    }).catch((error) =>
        dispatch(loginAsGuest())
    )
}

export const setUser = data =>
    ({
        type: types.SET_USER,
        data
    })

export const setToken = value => {
    Cookies.set('token', value)
    return {
        type: types.SET_TOKEN,
        value
    }
}