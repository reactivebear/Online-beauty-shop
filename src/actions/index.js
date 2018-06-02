import { get, post } from 'api'
import * as types from './types.js'

export const getCategories = () => dispatch => 
    (
        get(`api/categories`).then(json => {
            if (json.object) {
                dispatch(setCategories(json.object))
                return json.object
            }
        })
    )

export const getCategoriesByType = type => dispatch => 
    (
        get(`api/categories/${type}`).then(json => {
            if (json.object) {
                return json.object
            }
        })
    )

export const getCategoryList = (param, id) => dispatch => 
    (
        get(`api/categories/${param}`).then(json => {
            if (json.object) {
                dispatch(setCategoryList(json.object, param, id))
                return id
            }
        })
    )

export const addToWishList = (type, id) => dispatch => 
    (
        post(`api/wishlist/add/${type}/${id}`).then(json => {
            if (json.object) {
                console.log(json.object)
            }
        })
    )

export const getBlogs = () => dispatch => 
    (
        get(`api/banners`).then(json => {
            if (json.object) {
                console.log(json.object)
            }
        })
    )

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