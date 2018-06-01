import * as types from './types.js'

export const toggleSideMenu = state => 
    ({
        type: types.TOGGLE_SIDE_MENU,
        state
    })

export const toggleLeftMenu = (state, body) => 
    ({
        type: types.TOGGLE_LEFT_MENU,
        state,
        body
    })

export const setLocation = location => 
    ({
        type: types.SET_LOCATION,
        location
    })

export const toggleModal = (open, content, className) => 
    ({
        type: types.TOGGLE_MODAL,
        open,
        content,
        className
    })

export const setAlert = (text, level) =>
    ({
        type: types.SHOW_ALERT,
        text,
        level
    })

export const removeAlert = () =>
    ({
        type: types.REMOVE_ALERT
    })