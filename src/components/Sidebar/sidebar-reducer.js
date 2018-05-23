import {TOGGLE_SIDEBAR} from "./sidebar-constants";

const toggleSidebar = (state, close = false) => {
    let toggle = !state.toggle;

    if (close)
        toggle = false;

    return {...state, toggle}
};

export default (state = {toggle: false}, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return toggleSidebar(state, action.close);

        default:
            return state;
    }
}