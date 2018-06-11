import * as types from './types.js'

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