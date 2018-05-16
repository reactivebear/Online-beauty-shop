import api from 'api'
import * as types from './types.js'

export const getCategories = token => dispatch => {
    return api.getCategories(token)
    .then(json => {
        if (json.object) {
            dispatch(setCategories(json.object))
        }
    })
}

export const setCategories = data => 
    ({
        type: types.SET_CATEGORIES,
        data
    })

export const setActiveCategory = cat => 
    ({
        type: types.SET_ACTIVE_CATEGORY,
        cat
    })