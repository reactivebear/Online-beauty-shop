import api from 'api'
import * as types from './types.js'
import { setUser } from './auth.js'

export const getUserAddresses = () => dispatch => {
	return api.getUserAddresses()
    .then(json => {
        if (json.object) {
        	dispatch(setUserAddresses(json.object))
        }
    })
}

export const updateUser = data => dispatch => {
    return api.updateUser(data)
    .then(json => {
        if (json.object) {
            dispatch(setUser(json.object))
            return true
        }
    })
}

export const setUserAddresses = data => 
    ({
        type: types.SET_USER_ADDRESSES,
        data
    })

export const getWishlist = () => dispatch => {
    return api.getWishlist()
    .then(json => {
        if (json.object) {
            console.log(json.object)
        }
    })
}