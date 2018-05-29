import * as types from 'actions/types.js'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token'),
    guest: Cookies.get('guest') === 'true',
    data: {
        address: {},
        addresses: [],
        billing_addresses: []
    },
    wishlist: {
        products: [],
        services: []
    }
}

export default function user(user = initialState, action = {}) {
    let temp = Object.assign([], user.data)
    switch (action.type) {
        case types.SET_TOKEN:
            return Object.assign({}, user, {
                token: action.value,
                guest: action.guest
            });
        case types.SET_USER:
            return Object.assign({}, user, {
                data: action.data
            });
        case types.SET_USER_ADDRESSES:
            temp.address = action.data
            return Object.assign({}, user, {
                data: temp
            });
        default:
            return user;
    }
}