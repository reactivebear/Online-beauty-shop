import * as types from 'actions/types.js'

const initialState = {
    sideMenu: false,
    leftMenu: {
        state: false,
        body: null
    },
    alerts: {
        messages: []
    },
    modal: {
    	open: false,
    	content: null,
        className: ''
    },
    location: '/'
}

export default function design(design = initialState, action = {}) {
    switch (action.type) {
        case types.TOGGLE_SIDE_MENU:
            return Object.assign({}, design, {
                sideMenu: action.state
            });
        case types.TOGGLE_LEFT_MENU:
            return Object.assign({}, design, {
                leftMenu: {
                    state: action.state,
                    body: action.body
                }
            });
        case types.TOGGLE_MODAL:
            return Object.assign({}, design, {
               modal: {open: action.open, content: action.content, className: action.className}
            });
        case types.SET_LOCATION:
            return Object.assign({}, design, {
               location: action.location
            });
        case types.SHOW_ALERT:
            let tempMessages = Object.assign([], design.alerts.messages)
            tempMessages.push({ 'text': action.text, 'level': action.level })

            return Object.assign({}, design, {
                alerts: {
                    messages: tempMessages
                }
            });
        case types.REMOVE_ALERT:
            return Object.assign({}, design, {
                alerts: {
                    messages: []
                }
            });
        default:
            return design;
    }
}