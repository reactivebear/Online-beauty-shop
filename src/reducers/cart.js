import * as types from 'actions/types.js'

const initialState = {
    list: {
        product: [],
        service: []
    },
    
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
        
        default:
            return cart;
    }
}