import * as types from 'actions/types.js'

const initialState = {
    list: {
        product: [],
        service: []
    },
    total: {},
    use_credits: false,
    step: 1,
    guestAddress: {},
    guestCard: {}
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
        case types.SET_USE_CREDITS:
            return Object.assign({}, cart, {
                use_credits: action.value
            });
        case types.SET_STEP:
            return Object.assign({}, cart, {
                step: action.step
            });
        case types.SET_GUEST_INFO:
            return Object.assign({}, cart, {
                [action.key]: action.data
            })
        default:
            return cart;
    }
}