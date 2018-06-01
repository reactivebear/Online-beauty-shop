import * as config from 'config'
import Cookies from 'js-cookie'
import store from 'store'
import { setAlert } from 'actions/design'

const responseHandler = response => {
    
    let promise = response.json()
    
    if (withMessage) {
        promise.then(response => {
            store.dispatch(setAlert(response.message, 'success'))
            withMessage = false
        })
    }
    return promise;
}

const getHeader = () => 
    ({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        [config.APIKEY]: Cookies.get('token')
    })

let withMessage = false

export default {
    saveAddress(data) {
        return fetch(`${config.API_URL}/api/user/address/add`, {
            method: 'post',
            credentials: 'same-origin',
            headers: getHeader(),
            body: JSON.stringify(data)
        })
        .then(responseHandler)
    },
    saveCard(data) {
        return fetch(`${config.API_URL}/api/user/creditcard/add`, {
            method: 'post',
            credentials: 'same-origin',
            headers: getHeader(),
            body: JSON.stringify(data)
        })
        .then(responseHandler)
    },
    toggleDefaultCard(id) {
        return fetch(`${config.API_URL}/api/user/creditcard/default/${id}`, {
            method: 'patch',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getUserAddresses() {
        return fetch(config.API_URL + '/api/user/main-address', {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getWishlist(type) {
        return fetch(`${config.API_URL}/api/wishlist/${type}s`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getCategories(param) {
        const url = param ? ('/api/categories/' + param) : '/api/categories'
        return fetch(config.API_URL + url, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader()
        })
        .then(responseHandler)
    },
    getCategoryList(param) {
        return fetch(`${config.API_URL}/api/categories/${param}`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader()
        })
        .then(responseHandler)
    },
    getCategoryProducts(param) {
        return fetch(config.API_URL + '/api/categories/product', {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getCompany(id) {
        return fetch(`${config.API_URL}/api/vendor/${id}`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getServicesCategory(param) {
        return fetch(config.API_URL + '/api/services', {
            method: 'post',
            credentials: 'same-origin',
            headers: getHeader(),
            body: JSON.stringify(param)
        })
        .then(responseHandler)
    },
    addToCart(id, type, param) {
        withMessage = true
        return fetch(`${config.API_URL}/api/cart/add/${type}/${id}`, {
            method: 'post',
            credentials: 'same-origin',
            headers: getHeader(),
            body: JSON.stringify(param)
        })
        .then(responseHandler)
    },
    removeFromCart(id) {
        return fetch(`${config.API_URL}/api/cart/remove-item/${id}`, {
            method: 'delete',
            credentials: 'same-origin',
            headers: getHeader()
        })
        .then(responseHandler)
    },
    changeQuantity(id, val) {
        return fetch(`${config.API_URL}/api/cart/change-quantity/${id}/${val}`, {
            method: 'patch',
            credentials: 'same-origin',
            headers: getHeader()
        })
        .then(responseHandler)
    },
    getCart() {
        return fetch(`${config.API_URL}/api/cart`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getDelivery(id) {
        return fetch(`/api/cart/delivery/${id}`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getCartTotal() {
        return fetch(`${config.API_URL}/api/cart/value`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    addToWishList(type, id) {
        return fetch(`${config.API_URL}/api/wishlist/add/${type}/${id}`, {
            method: 'post',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getCredits() {
        return fetch(`${config.API_URL}/api/credits`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getAppointments() {
        return fetch(`${config.API_URL}/api/appointments`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getPurchases() {
        return fetch(`${config.API_URL}/api/user/purchases`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
    getBlogs() {
        return fetch(`${config.API_URL}/api/banners`, {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader(),
        })
        .then(responseHandler)
    },
}