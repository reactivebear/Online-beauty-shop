import api from 'api'
import * as types from './types.js'

export const getServices = (type, param) => dispatch => {
    return api.getServices(param)
    .then(json => {        
        if (json.object) {
        	dispatch(setServices(json.object, type))
        }
    })
}

export const getServicesCategory = (catId, param) => dispatch => {
    return api.getServicesCategory(param)
    .then(json => {        
        if (json.object) {
            dispatch(setServiceCategory(catId, json.object))
        }
    })
}

export const setServices = (data, key) => 
    ({
        type: types.SET_SERVICES,
        data,
        key
    })

export const setServiceCategory = (catId, data) => 
    ({
        type: types.SET_SERVICE_CATEGORY,
        catId,
        data
    })