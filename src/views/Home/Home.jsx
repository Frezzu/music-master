import React, {Component} from 'react';
import './style.css';
import ContainerWithSidebar from "../../components/containers/ContainerWithSidebar/ContainerWithSidebar";
import SearchForm from "../../components/SearchForm/SearchForm";
import SpotifyService from "../../services/spotify/SpotifyService";
import {Row} from "reactstrap";
import HistorySidebar from "./components/HistorySidebar/HistorySidebar";
import Profile from "../../components/Profile/Profile";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            tracks: [],
            relatedArtists: [],
        }
    }

    searchForArtist(query) {
        SpotifyService.findArtist(query)
            .then(artist => {
                this.setState({artist});

                SpotifyService.getArtistTopTracks(artist.id)
                    .then(tracks => this.setState({tracks}));

                SpotifyService.getRelatedArtists(artist.id, 6)
                    .then(relatedArtists => this.setState({relatedArtists}));
                console.log(this.state);
            });
    }

    render() {
        return (
            <ContainerWithSidebar
                className="home"
                sidebar={<HistorySidebar/>}
            >
                <Row className="home--header-section">
                    <h1 className="home--logo">MusicMaster</h1>
                    <SearchForm
                        className="home--search"
                        placeholder="Search for an artist..."
                        onSubmit={(event) => {
                            event.preventDefault();
                            this.searchForArtist(event.target.value)
                        }}
                    />
                </Row>
                {
                    this.state.artist !== null ?
                        <div>
                            <Profile
                                name={this.state.artist.name}
                                image={this.state.artist.images[0]}
                            />
                        </div>
                        :
                        null
                }
            </ContainerWithSidebar>
        )
    }
}

export default Home;