import api from 'api'
import * as types from './types.js'

export const getProducts = (type, param) => dispatch => {
    return api.getProducts(param)
    .then(json => {
        if (json.object) {
        	dispatch(setProducts(json.object, type))
        }
    })
}

export const getProduct = id => dispatch => {
    return api.getProduct(id)
    .then(json => {
        if (json.object) {
            dispatch(setProduct(json.object))
        }
    })
}

export const setProducts = (data, key) => 
    ({
        type: types.SET_PRODUCTS,
        data,
        key
    })

export const setProduct = data => 
    ({
        type: types.SET_PRODUCT,
        data
    })
    