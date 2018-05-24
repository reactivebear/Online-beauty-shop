import * as types from 'actions/types.js'

const initialState = {
    list: {
        product: [],
        service: []
    },
    total: {},
    step: 1
    
}

export default function cart(cart = initialState, action = {}) {
    let tempList = Object.assign({}, cart.list)
    switch (action.type) {
        case types.SET_CART:
            tempList.product = action.data.filter(item => item.type === 'product')
            tempList.service = action.data.filter(item => item.type === 'service')
            return Object.assign({}, cart, {
                list: tempList
            });
        case types.SET_CART_TOTAL:
            return Object.assign({}, cart, {
                total: action.data
            });
        case types.SET_STEP:
            return Object.assign({}, cart, {
                step: action.step
            });
        default:
            return cart;
    }
}