import * as types from 'actions/types.js'

const initialState = {
    product: [],
    service: [],
    filters: {
        min_price: 0,
        max_price: 1000
    },
    type: 'all'
}

export default function search(search = initialState, action = {}) {
    switch (action.type) {
        case types.SET_SEARCH:
            return Object.assign({}, search, { 
                product: action.data.filter(item => item.product).map(item => item.product),
                service: action.data.filter(item => item.service).map(item => item.service),
            })
        case types.SET_FILTERS:
            return  Object.assign({}, search, { 
                filters: action.data
            })
        case types.SET_SEARCH_TYPE:
            console.log(action.value)
            return  Object.assign({}, search, { 
                type: action.value
            })
        default:
            return search;
    }
}