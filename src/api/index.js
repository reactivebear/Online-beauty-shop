import * as config from 'config'

const responseHandler = (response) => {
    /*if (response.status == 401) {
        store.dispatch(logout())
        return
    }*/
    
    let promise = response.json()
    let ok = response.ok
    
    /*promise.then(response => {
        if (response.validate) {
            for (let k in response.validate) {
                for (let j in response.validate[k]) {
                    store.dispatch(setAlert(response.validate[k][j], 'error'))
                }
            }
        }

        if (response.message && (! response.validate || response.validate == null)) {
            store.dispatch(setAlert(response.message, ok ? 'success' : 'error'))
        }

        if (response.errors) {
            for (let k in response.errors) {
                for (let j in response.errors[k]) {
                    store.dispatch(setAlert(response.errors[k][j], 'error'))
                }
            }
        }
    })*/
    return promise;
}

const getHeader = token => 
    ({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        [config.APIKEY]: token
    })


export default {
    loginAsGuest() {
        return fetch(config.API_URL + '/guest', {
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(responseHandler)
    },
    getCategories(token) {
        return fetch(config.API_URL + '/api/categories', {
            method: 'get',
            credentials: 'same-origin',
            headers: getHeader()
        })
        .then(responseHandler)
    },
}