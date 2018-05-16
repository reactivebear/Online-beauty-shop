import api from 'api'
import * as types from './types.js'

export const getServices = type => dispatch => {
    return api.getServices(type)
    .then(json => {        if (json.object) {
        	dispatch(setServices(json.object, type))
        }
    })
}

export const setServices = (data, key) => 
    ({
        type: types.SET_SERVICES,
        data,
        key
    })