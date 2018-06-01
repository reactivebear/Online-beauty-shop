import api from 'api'
import { put, get } from 'api/request'
import * as types from './types.js'
import { setUser } from './auth.js'

export const updateUser = data => dispatch => 
    (
        put('api/user/edit', true, data).then(json => {
            if (json.object) {
                dispatch(setUser(json.object))
                return true
            }
        })
    )

export const getCreditCards = () => dispatch => 
    (
        get('api/user/creditcards').then(json => {
            if (json.object) {
                dispatch(setUserKey(json.object, 'cards'))
            }
        })
    )

export const getWishlist = type => dispatch => 
    (
        get(`api/wishlist/${type}s`).then(json => {
            if (json.object) {
                dispatch(setUserKey(json.object, 'cards'))
            }
        })
    )

export const getUserAddresses = () => dispatch => {
	return api.getUserAddresses()
    .then(json => {
        if (json.object) {
        	dispatch(setUserAddresses(json.object))
        }
    })
}

export const saveAddress = data => dispatch => {
    return api.saveAddress(data)
    .then(json => {
        if (json.object) {
            dispatch(addAddress(json.object))
        }
    })
}

export const saveCard = data => dispatch => {
    return api.saveCard(data)
    .then(json => {
        if (json.object) {
            dispatch(addCard(json.object))
        }
    })
}

export const toggleDefaultCard = id => dispatch => {
    return api.toggleDefaultCard(id)
    .then(json => {
        if (json.object) {
            dispatch(getCreditCards())
        }
    })
}





export const getCredits = () => dispatch => {
    return api.getCredits()
    .then(json => {
        if (json.object) {
            console.log(json.object)
        }
    })
}

export const getAppointments = () => dispatch => {
    return api.getAppointments()
    .then(json => {
        if (json.object) {
            console.log(json.object)
        }
    })
}

export const getPurchases = () => dispatch => {
    return api.getPurchases()
    .then(json => {
        if (json.object) {
            dispatch(setUserKey(json.object, 'purchases'))
        }
    })
}

export const setUserAddresses = data => 
    ({
        type: types.SET_USER_ADDRESSES,
        data
    })

export const addAddress = data => 
    ({
        type: types.ADD_ADDRESS,
        data
    })

export const addCard = data => 
    ({
        type: types.ADD_CARD,
        data
    })
    
export const setUserKey = (data, key) => 
    ({
        type: types.SET_USER_KEY,
        data,
        key
    })