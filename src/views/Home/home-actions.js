import {ADD_TO_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "./home-constants";

export const addToSearchHistory = (artist) => {
    return {
        type: ADD_TO_SEARCH_HISTORY,
        artist
    }
};

export const clearSearchHistory = () => {
    return {
        type: CLEAR_SEARCH_HISTORY
    }
};