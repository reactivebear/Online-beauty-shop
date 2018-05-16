import * as types from 'actions/types.js'

const initialState = {
    sideMenu: false,
}

export default function design(design = initialState, action = {}) {
    switch (action.type) {
        case types.TOGGLE_SIDE_MENU:
            return Object.assign({}, design, {
                sideMenu: action.state
            });
        default:
            return design;
    }
}