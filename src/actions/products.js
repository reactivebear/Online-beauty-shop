import api from 'api'
import * as types from './types.js'
import { get, post } from 'api/request'

export const getProducts = (type, param) => dispatch => 
    (
        post('api/products', false, param).then(json => {
            if (json.object) {
                dispatch(setProducts(json.object, type))
            }
        })
    )

export const getProduct = id => dispatch => 
    (
        get(`api/product/${id}`, false).then(json => {
            if (json.object) {
                dispatch(setProduct(json.object))
            }
        })
    )

export const getCategoryProducts = (type, param) => dispatch => {
    return api.getCategoryProducts(param)
    .then(json => {
        if (json.object) {
            console.log(json.object)
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
    