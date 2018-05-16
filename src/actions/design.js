import * as types from './types.js'

export const toggleSideMenu = state => 
    ({
        type: types.TOGGLE_SIDE_MENU,
        state
    })