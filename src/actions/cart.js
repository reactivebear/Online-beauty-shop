import api from 'api'
import * as types from './types.js'

export const addToCart = (id, type, param) => dispatch => {
    return api.addToCart(id, type, param)
    .then(json => {
        if (json.object) {
        	console.log(json.object)
        }
    })
}

export const removeFromCart = id => dispatch => {
	return api.removeFromCart(id)
    .then(json => {
    	dispatch(getCart())
    })
}

export const getCart = () => dispatch => {
	return api.getCart()
    .then(json => {
        if (json.object) {
        	dispatch(setCart(json.object))
        }
    })
}

export const setCart = data => 
    ({
        type: types.SET_CART,
        data
    })