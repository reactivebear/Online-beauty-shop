import * as types from 'actions/types.js'

const initialState = {
    recommended: [],
}

export default function services(services = initialState, action = {}) {
    switch (action.type) {
        case types.SET_SERVICES:
            return Object.assign({}, services, {
                [action.key]: action.data
            });
        default:
            return services;
    }
}