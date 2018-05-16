import * as types from 'actions/types.js'
import Cookies from 'js-cookie'

const initialState = {
    productCategories: [],
    serviceCategories: [],
    active: 'productCategories'
}

export default function categories(categories = initialState, action = {}) {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return Object.assign({}, categories, {
                productCategories: action.data.productCategories,
                serviceCategories: action.data.serviceCategories
            });
        case types.SET_ACTIVE_CATEGORY:
            return Object.assign({}, categories, {
                active: action.cat
            });
        default:
            return categories;
    }
}