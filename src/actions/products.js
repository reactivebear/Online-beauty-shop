import api from 'api'
import * as types from './types.js'

export const getProducts = type => dispatch => {
    return api.getProducts(type)
    .then(json => {
        if (json.object) {
        	dispatch(setProducts(json.object, type))
        }
    })
}

export const setProducts = (data, key) => {
	return {
	        type: types.SET_PRODUCTS,
	        data,
	        key
	    }
}
    