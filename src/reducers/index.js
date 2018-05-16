import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user.js'
import categories from './categories.js'
import design from './design.js'
import products from './products.js'
import services from './services.js'

const reducer = combineReducers({
    routing: routerReducer,
    user,
    categories,
    design,
    products,
    services
})

export default reducer