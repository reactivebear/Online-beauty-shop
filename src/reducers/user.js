import * as types from 'actions/types.js'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token'),
    data: {
        addresses: []
    }
}

export default function user(user = initialState, action = {}) {
    let temp = Object.assign([], user.data)
    switch (action.type) {
        case types.SET_TOKEN:
            return Object.assign({}, user, {
                token: action.value
            });
        case types.SET_USER:
            return Object.assign({}, user, {
                user: action.data
            });
        case types.SET_USER_ADDRESSES:
            temp.addresses = action.data
            return Object.assign({}, user, {
                data: temp
            });
        default:
            return user;
    }
}