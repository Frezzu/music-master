import cookies from 'react-cookies';
import {ADD_TO_SEARCH_HISTORY, MAX_SEARCH_HISTORY_ENTRIES, SEARCH_HISTORY} from "./home-constants";


const addToSearchHistory = (state, artist) => {

    if (!state.searchHistory.map(entry => entry.id).includes(artist.id)) {
        const artistData = {
            id: artist.id,
            name: artist.name,
            images: [artist.images[0]],
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

        cookies.save(SEARCH_HISTORY, state.searchHistory);
    }

    return state;
};

export default (state = {}, action) => {
    state.searchHistory = cookies.load(SEARCH_HISTORY);

    if (state.searchHistory === undefined) {
        state.searchHistory = [];
    }

    switch (action.type) {
        case ADD_TO_SEARCH_HISTORY:
            return addToSearchHistory(state, action.artist);

        default:
            return state;
    }
}