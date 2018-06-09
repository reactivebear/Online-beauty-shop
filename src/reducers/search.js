import * as types from 'actions/types.js'

const initialState = {
    product: [],
    service: []
   
}

export default function search(search = initialState, action = {}) {
    switch (action.type) {
        case types.SET_SEARCH:
            return Object.assign({}, search, { 
                product: action.data.filter(item => item.product).map(item => item.product),
                service: action.data.filter(item => item.service).map(item => item.service),
            })
        default:
            return search;
    }
}