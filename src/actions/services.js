import * as types from './types.js'
import { post, get } from 'api'

export const getServices = (type, param) => dispatch => 
    (
        post('api/services', false, param).then(json => {
            if (json.object) {
                dispatch(setServices(json.object, type))
            }
        })
    )

export const getService = id => dispatch => 
    (
        get(`api/service/${id}/salon`, false).then(json => {
            if (json.object) {
                dispatch(setServices(json.object, 'salon'))
            }
        })
    )

export const getServicesCategory = param => dispatch => 
    (
        post('api/services', false, param).then(json => {
            if (json.object) {
                dispatch(setServiceCategory(param.category, json.object))
            }
        })
    )

export const sendSalonComment = (data, id) => dispatch =>
    (
        post(`api/vendor/${id}/review`, true, data)
        .then(json => json.status === 200)
    )

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