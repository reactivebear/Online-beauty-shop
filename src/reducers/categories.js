import * as types from 'actions/types.js'
import Cookies from 'js-cookie'

const initialState = {
    product: [],
    service: [],
    active: 'product'
}

export default function categories(categories = initialState, action = {}) {
    let temp = Object.assign({}, categories)
    switch (action.type) {
        case types.SET_CATEGORIES:
            return Object.assign({}, categories, {
                product: action.data.productCategories,
                service: action.data.serviceCategories
            });
        case types.SET_CATEGORY:
            return Object.assign({}, categories, {
                [action.key]: action.data,
            });
        case types.SET_ACTIVE_CATEGORY:
            return Object.assign({}, categories, {
                active: action.cat
            });
        case types.SET_SERVICE_CATEGORY:
            temp.service.find(item => item.id === action.catId).list = action.data
            return Object.assign({}, categories, {
                temp
            });
        default:
            return categories;
    }
}