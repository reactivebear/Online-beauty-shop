import api from 'api'
import * as types from './types.js'
import { getServicesCategory, getServices } from './services.js'
import { getProducts } from './products.js'

export const getCategories = param => dispatch => {
    return api.getCategories(param)
    .then(json => {
        if (json.object) {
            if (param) {
                dispatch(setCategory(json.object, param))
                for (let cat of json.object) {
                    let param = {
                        page_size: 2,
                        category: cat.id
                    }
                    dispatch(getServicesCategory(cat.id, param))
                }
            } else {
                dispatch(setCategories(json.object))
            }
        }
    })
}

export const getCategoryList = (param, id) => dispatch => 
    (api.getCategoryList(param)
    .then(json => {
        if (json.object) {
            dispatch(setCategoryList(json.object, param, id))
            return id
        }
    }))

export const addToWishList = (type, id) => dispatch => 
    (api.addToWishList(type, id)
    .then(json => {
        if (json.object) {
            console.log(json.object)
        }
    }))

export const setCategoryList = (data, key, id) => 
    ({
        type: types.SET_CATEGORY_LIST,
        data,
        key,
        id
    })

export const setCategories = data => 
    ({
        type: types.SET_CATEGORIES,
        data
    })

export const setCategory = (data, key) => 
    ({
        type: types.SET_CATEGORY,
        data,
        key
    })

export const setActiveCategory = cat => 
    ({
        type: types.SET_ACTIVE_CATEGORY,
        cat
    })