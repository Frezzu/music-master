class SpotifyService {

    static ACCESS_TOKEN = 'BQCOU4Hn1u9mjdd19omUkLgX6rqkbQmx9xY0DtC8JOD7oJr9HFsMcEEZifUPBHyEpZfTtaBpfBg0BhVJz7k';

    static BASE_URL = 'https://api.spotify.com';
    static SEARCH_URL = `${SpotifyService.BASE_URL}/v1/search`;
    static ARTIST_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}`;
    static TOP_TRACKS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/top-tracks`;
    static RELATED_ARTISTS_URL = `${SpotifyService.BASE_URL}/v1/artists/{id}/related-artists`;

    static BASE_HEADERS = {
        'Authorization': `Bearer ${SpotifyService.ACCESS_TOKEN}`
    };


    getArtist(id) {
        let artist = null;

        const fetchUrl = `${SpotifyService.ARTIST_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                artist = json;
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });

        return artist;
    }

    getArtistTopTracks(id) {
        let tracks = null;

        const fetchUrl = `${SpotifyService.TOP_TRACKS_URL}?country=PL`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                tracks = json.tracks;
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });

        return tracks;
    }

    searchForArtist(query) {
        let artist = null;

        const fetchUrl = `${SpotifyService.SEARCH_URL}?q=${query}&type=artist&limit=1`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        fetch(fetchUrl, fetchOptions)
            .then(response => response.json())
            .then(json => {
                artist = json.artists.items[0];
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });

        return artist;
    }

    getRelatedArtists(id, limit = 1) {
        let relatedArtists = null;

        const fetchUrl = `${SpotifyService.RELATED_ARTISTS_URL}`;
        const fetchOptions = {
            method: 'GET',
            headers: SpotifyService.BASE_HEADERS
        };

        fetch(fetchUrl.replace('{id}', id), fetchOptions)
            .then(response => response.json())
            .then(json => {
                relatedArtists = json.artists.slice(0, limit);
            })
            .catch(reason => {
                console.log('FETCH ERROR: ', reason);
            });

        return relatedArtists;
    }

}

export default SpotifyService;