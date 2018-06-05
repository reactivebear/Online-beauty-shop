import { put, get, post, patch, remove } from 'api'
import * as types from './types.js'
import { setUser } from './auth.js'

export const updateUser = data => dispatch => 
    (
        put('api/user/edit', true, data).then(json => {
            if (json.object) {
                dispatch(setUser(json.object))
                return true
            }
        })
    )

export const getCreditCards = () => dispatch => 
    (
        get('api/user/creditcards').then(json => {
            if (json.object) {
                dispatch(setUserKey(json.object, 'cards'))
            }
        })
    )

export const getWishlist = type => dispatch => 
    (
        get(`api/wishlist/${type}`).then(json => {
            if (json.object) {
                dispatch(setUserKey({[type]: json.object}, 'wishlist'))
            }
        })
    )

export const getUserAddress = () => dispatch => 
    (
        get(`api/user/main-address`).then(json => {
            if (json.object) {
                dispatch(setUserAddresses(json.object))
            }
        })
    )

export const saveAddress = data => dispatch => 
    (
        post(`api/user/address/add`, true, data).then(json => {
            if (json.object) {
                dispatch(addAddress(json.object))
            }
        })
    )

export const saveCard = data => dispatch => 
    (
        post(`api/user/creditcard/add`, true, data).then(json => {
            if (json.object) {
                dispatch(addCard(json.object))
                return true
            }
        })
    )

export const removeCreditCard = id => dispatch => 
    (
        remove(`api/user/creditcard/${id}`, true).then(json => {
            dispatch(getCreditCards())
        })
    )

export const toggleDefaultCard = id => dispatch => 
    (
        patch(`api/user/creditcard/default/${id}`).then(json => {
            if (json.object) {
                dispatch(getCreditCards())
            }
        })
    )

export const getCredits = () => dispatch => 
    (
        get(`api/credits`).then(json => {
            if (json.object) {
                console.log(json.object)
            }
        })
    )

export const getAppointments = () => dispatch => 
    (
        get(`api/appointments`).then(json => {
            if (json.object) {
                console.log(json.object)
            }
        })
    )

export const getPurchases = () => dispatch => 
    (
        get(`api/user/purchases`).then(json => {
            if (json.object) {
                dispatch(setUserKey(json.object, 'purchases'))
            }
        })
    )

export const setUserAddresses = data => 
    ({
        type: types.SET_USER_ADDRESSES,
        data
    })

export const addAddress = data => 
    ({
        type: types.ADD_ADDRESS,
        data
    })

export const addCard = data => 
    ({
        type: types.ADD_CARD,
        data
    })
    
export const setUserKey = (data, key) => 
    ({
        type: types.SET_USER_KEY,
        data,
        key
    })