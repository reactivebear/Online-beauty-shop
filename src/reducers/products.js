import * as types from 'actions/types.js'

const initialState = {
    list: [],
    product: {},
    salon: {
        address: {},
        social_media: [],
        reviews: []
    }
}

export default function products(products = initialState, action = {}) {
	let temp =  Object.assign({}, products)
    switch (action.type) {
        case types.SET_PRODUCTS:
            return Object.assign({}, products, {
                [action.key]: action.data
            });
        case types.SET_PRODUCT:
        	temp.product = action.data.product
        	temp.salon = action.data.salon
            return Object.assign({}, products, temp);
        default:
            return products;
    }
}