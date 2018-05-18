class SpotifyService {

    static ACCESS_TOKEN = 'BQBByZjFJOceQ12maYCYfgQclD1fHwQiQrcjU-YA5X97nRuIHQ1UQo16VgQGNCultAkt8MOensEoO5OWRWw';

    static BASE_URL = 'https://api.spotify.com';
    static SEARCH_URL = `${SpotifyService.BASE_URL}/v1/search`;
    static ARTIST_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}`;
    static TOP_TRACKS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/top-tracks`;
    static RELATED_ARTISTS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/related-artists`;

    static BASE_HEADERS = {
        'Authorization': `Bearer ${SpotifyService.ACCESS_TOKEN}`
    };


    getArtist(id) {
        const fetchUrl = `${SpotifyService.ARTIST_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });
    }

    getArtistTopTracks(id) {
        const fetchUrl = `${SpotifyService.TOP_TRACKS_URL}?country=PL`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.tracks;
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });
    }

    findArtist(query) {
        const fetchUrl = `${SpotifyService.SEARCH_URL}?q=${query}&type=artist&limit=1`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        return fetch(fetchUrl, fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.artists.items[0];
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });
    }

    getRelatedArtists(id, limit = 1) {
        const fetchUrl = `${SpotifyService.RELATED_ARTISTS_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.artists.slice(0, limit);
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });
    }

}

export default new SpotifyService();