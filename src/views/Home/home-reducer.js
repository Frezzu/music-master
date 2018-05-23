import {
    ADD_TO_SEARCH_HISTORY,
    CLEAR_SEARCH_HISTORY,
    MAX_SEARCH_HISTORY_ENTRIES,
    REMOVE_FROM_SEARCH_HISTORY,
    SEARCH_HISTORY
} from "./home-constants";


const addToSearchHistory = (state = {}, artist) => {

    if (!state.searchHistory.map(entry => entry.id).includes(artist.id)) {
        const artistData = {
            id: artist.id,
            name: artist.name,
            images: artist.images,
            followers: {
                total: artist.followers.total
            },
            genres: artist.genres,
            external_urls: {
                spotify: artist.external_urls.spotify
            }
        };

        state.searchHistory.unshift(artistData);

        if (state.searchHistory.length > MAX_SEARCH_HISTORY_ENTRIES)
            state.searchHistory.pop();

        localStorage.setItem(SEARCH_HISTORY, JSON.stringify(state.searchHistory));
    }

    return state;
};

const removeFromSearchHistoryReducer = (state = {}, artist) => {
    const searchHistory = state.searchHistory;
    searchHistory.splice(state.searchHistory.indexOf(artist) - 1, 1);

    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(searchHistory));

    return {...state, searchHistory};
};

const clearSearchHistory = (state = {}) => {
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify([]));

    return {...state, searchHistory: []};
};

export default (state = {
                    searchHistory: localStorage.getItem(SEARCH_HISTORY) === null ? [] : JSON.parse(localStorage.getItem(SEARCH_HISTORY))
                },
                action) => {

    switch (action.type) {
        case ADD_TO_SEARCH_HISTORY:
            return addToSearchHistory(state, action.artist);

        case REMOVE_FROM_SEARCH_HISTORY:
            return removeFromSearchHistoryReducer(state, action.artist);

        case CLEAR_SEARCH_HISTORY:
            return clearSearchHistory(state);

        default:
            return state;
    }
}