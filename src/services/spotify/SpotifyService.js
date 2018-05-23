class SpotifyService {

    static TOKEN_URL = 'http://musicmaster.bmrozinski.atthouse.pl/api2';
    static BASE_URL = 'https://api.spotify.com';
    static SEARCH_URL = `${SpotifyService.BASE_URL}/v1/search`;
    static ARTIST_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}`;
    static TOP_TRACKS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/top-tracks`;
    static RELATED_ARTISTS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/related-artists`;

    constructor() {
        fetch(SpotifyService.TOKEN_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.accessToken = json.access_token;
                this.baseHeaders = {
                    'Authorization': `Bearer ${this.accessToken}`
                };
            });
    }


    getArtist(id) {
        const fetchUrl = `${SpotifyService.ARTIST_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: this.baseHeaders
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json;
            });
    }

    getArtistTopTracks(id) {
        const fetchUrl = `${SpotifyService.TOP_TRACKS_URL}?country=PL`;
        const fetchOptions = {
            method: 'GET',
            headers: this.baseHeaders
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.tracks;
            });
    }

    findArtist(query) {
        const fetchUrl = `${SpotifyService.SEARCH_URL}?q=${query}&type=artist&limit=1`;
        const fetchOptions = {
            method: 'GET',
            headers: this.baseHeaders
        };

        return fetch(fetchUrl, fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.artists.items[0];
            });
    }

    getRelatedArtists(id, limit = 1) {
        const fetchUrl = `${SpotifyService.RELATED_ARTISTS_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: this.baseHeaders
        };

        return fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                return json.artists.slice(0, limit);
            });
    }

}

export default new SpotifyService();