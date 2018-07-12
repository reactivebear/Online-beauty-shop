import * as types from './types.js'
import { get, post } from 'api'

export const setScheduleCart = data => 
    ({
        type: types.SET_SCHEDULE_CART,
        data
    })

export const setScheduleStep = step => 
    ({
        type: types.SET_SCHEDULE_STEP,
        step
    })

export const setGuestCard = data =>
	({
        type: types.SET_GUEST_CARD,
        data
    })

export const getProffesional = prof => dispatch => 
    (
        get(`api/professional/${prof.id}/working-hours`, false).then(json => {
            if (json.object) {
                dispatch(setProffesional({data: prof, hours: json.object}))
            }
        })
    )

export const makeAppointment = serviceId => dispatch => 
    (
        post(`api/appointment/new/${serviceId}`, true).then(json => {
            console.log(json)
        })
    )

export const setProffesional = data =>
    ({
        type: types.SET_PROFFESIONAL,
        data
    })

export const setScheduleUseCredits = value => 
    ({
        type: types.SET_SCHEDULE_USE_CREDITS,
        value
    })

export const setScheduleTotal = value =>
    ({
        type: types.SET_SCHEDULE_TOTAL,
        value
    })