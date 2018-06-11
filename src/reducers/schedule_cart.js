import * as types from 'actions/types.js'

const initialState = {
    item: {},
    total: {},
    step: 1,
    
}

export default function schedule_cart(schedule_cart = initialState, action = {}) {
    switch (action.type) {
        case types.SET_SCHEDULE_CART:
            return Object.assign({}, schedule_cart, {
                item: action.data
            });
        case types.SET_SCHEDULE_STEP:
            return Object.assign({}, schedule_cart, {
                step: action.step
            });
        default:
            return schedule_cart;
    }
}