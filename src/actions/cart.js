import api from 'api'
import { get, post, remove } from 'api/request'
import * as types from './types.js'

export const getCart = () => dispatch => 
    (
        get('api/cart').then(json => {
            if (json.object) {
                dispatch(setCart(json.object))
            }
        })
    )

export const addToCart = (id, type, param) => dispatch => 
    (
        post(`api/cart/add/${type}/${id}`, true, param).then(json => {
            if (json.object) {
                console.log(json.object)
            }
        })
    )

export const removeFromCart = id => dispatch => 
    (
        remove(`api/cart/remove-item/${id}`, true).then(json => {
            dispatch(getCart())
        })
    )

export const getDelivery = id => dispatch => {
    return api.getDelivery(id)
    .then(json => {
        if (json.object) {
            console.log(json.object)
        }
    })
}

export const getCartTotal = () => dispatch => {
    return api.getCartTotal()
    .then(json => {
        if (json.object) {
            dispatch(setCartTotal(json.object))
        }
    })
}

export const changeQuantity = (id, val) => dispatch => {
    return api.changeQuantity(id, val)
    .then(json => {
        console.log(json)
    })
}

export const setCart = data => 
    ({
        type: types.SET_CART,
        data
    })

export const setCartTotal = data => 
    ({
        type: types.SET_CART_TOTAL,
        data
    })

export const setStep = step => 
    ({
        type: types.SET_STEP,
        step
    })