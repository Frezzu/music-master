import {TOGGLE_SIDEBAR} from "./sidebar-constants";

export const toggleSidebar = (close) => {
    return {
        type: TOGGLE_SIDEBAR,
        close
    }
};