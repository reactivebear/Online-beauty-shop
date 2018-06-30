import * as types from 'actions/types.js'

const initialState = {
    products: {
        all: 0,
        list: []
    },
    services: {
        all: 0,
        list: []
    },
    filters: {
        min_price: 0,
        max_price: 1000
    },
    type: 'alls',
    query: '',
    autocomplete: {
        product: [],
        service: []
    }
}

export default function search(search = initialState, action = {}) {
    switch (action.type) {
        case types.SET_SEARCH:
            return Object.assign({}, search, { 
                [action.key]: action.data,
            })
        case types.SET_FILTERS:
            return  Object.assign({}, search, { 
                filters: action.data
            })
        case types.SET_SEARCH_QUERY:
            return Object.assign({}, search, { 
                query: action.value
            })
        case types.SET_AUTOCOMPLETE:
            return  Object.assign({}, search, { 
                autocomplete: {
                    product: action.data.filter(item => item.product).map(item => item.product.name),
                    service: action.data.filter(item => item.service).map(item => item.service.title),
                }
            })
        case types.SET_SEARCH_TYPE:
            return  Object.assign({}, search, { 
                type: action.value
            })
        default:
            return search;
    }
}