import * as types from 'actions/types.js'

const initialState = {
    recommended: [],
}

export default function products(products = initialState, action = {}) {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return Object.assign({}, products, {
                [action.key]: action.data
            });
        default:
            return products;
    }
}