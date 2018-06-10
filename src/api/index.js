import * as config from 'config'
import Cookies from 'js-cookie'
import store from 'store'
import { setAlert } from 'actions/design'

let withMessage = false

const responseHandler = response => {
    const promise = response.json()
    const ok = response.ok
    if (withMessage) {
        promise.then(response => {
            store.dispatch(setAlert(response.message, ok ? 'success' : 'error'))
            withMessage = false
        })
    }
    return promise;
}

const getHeader = () => 
    ({
        //'Content-Type': 'application/json',
        'Accept': 'application/json',
        [config.APIKEY]: Cookies.get('token')
    })

export const get = (...data) => {
	const [url, alert = false] = data
	withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'get',
        headers: getHeader(),
    })
    .then(responseHandler)
}

export const post = (...data) => {
	const [url, alert = false, body] = data
	withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'post',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
    .then(responseHandler)
}

export const put = (...data) => {
    const [url, alert = false, body] = data
    withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'put',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
    .then(responseHandler)
}

export const remove = (...data) => {
	const [url, alert = false] = data
	withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'delete',
        headers: getHeader()
    })
    .then(responseHandler)
}

export const patch = (...data) => {
    const [url, alert = false, body] = data
    withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'patch',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
    .then(responseHandler)
}

export const image = (...data) => {
    const [url, alert = false, body] = data
    withMessage = alert
    return fetch(`${config.API_URL}/${url}`, {
        method: 'post',
        headers: getHeader(),
        body: body
    })
    .then(responseHandler)
}