import * as types from './types.js'

export const toggleSideMenu = state => 
    ({
        type: types.TOGGLE_SIDE_MENU,
        state
    })

export const setLocation = location => 
    ({
        type: types.SET_LOCATION,
        location
    })