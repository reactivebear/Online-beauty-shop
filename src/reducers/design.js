import * as types from 'actions/types.js'

const initialState = {
    sideMenu: false,
    modal: {
    	open: false,
    	content: ''
    }
}

export default function design(design = initialState, action = {}) {
    switch (action.type) {
        case types.TOGGLE_SIDE_MENU:
            return Object.assign({}, design, {
                sideMenu: action.state
            });
        case types.TOGGLE_MODAL:
            return Object.assign({}, design, {
               modal: {open: action.open, content: action.content}
            });
        default:
            return design;
    }
}