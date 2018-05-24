import api from 'api'
import * as types from './types.js'

export const getUserAddresses = () => dispatch => {
	return api.getUserAddresses()
    .then(json => {
        if (json.object) {
        	dispatch(setUserAddresses(json.object))
        }
    })
}

export const setUserAddresses = data => 
    ({
        type: types.SET_USER_ADDRESSES,
        data
    })