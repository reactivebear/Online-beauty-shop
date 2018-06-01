import api from 'api'
import * as types from './types.js'
import { post } from 'api/request'

export const getServices = (type, param) => dispatch => 
    (
        post('api/services', false, param).then(json => {
            if (json.object) {
                dispatch(setServices(json.object, type))
            }
        })
    )

/*export const getServicesCategory = param => dispatch => 
    (
        post('api/services', false, param).then(json => {
            if (json.object) {
                dispatch(setServiceCategory(param.category, json.object))
            }
        })
    )*/


export const getServicesCategory = param => dispatch => {
    return api.getServicesCategory(param)
    .then(json => {        
        if (json.object) {
            dispatch(setServiceCategory(param.category, json.object))
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