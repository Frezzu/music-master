import React, {Component} from 'react';
import './style.css';
import ContainerWithSidebar from "../../components/containers/ContainerWithSidebar/ContainerWithSidebar";
import SearchForm from "../../components/SearchForm/SearchForm";
import SpotifyService from "../../services/spotify/SpotifyService";
import {Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import HistorySidebar from "./components/HistorySidebar/HistorySidebar";
import ArtistProfile from "./components/ArtistProfile/ArtistProfile";
import TracksGallery from "./components/TracksGallery/TracksGallery";

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
                <Row>
                    <Col className="home--header-section">
                        <h1 className="home--logo">MusicMaster</h1>
                        <SearchForm
                            className="home--search"
                            placeholder="Search for an artist..."
                            onSubmit={(event) => {
                                event.preventDefault();
                                this.searchForArtist(event.target.searchInput.value);
                            }}
                        />
                    </Col>
                </Row>

                {
                    this.state.artist !== null ?
                        <Row>
                            <Col xs={12}>
                                <ArtistProfile
                                    artist={this.state.artist}
                                />
                            </Col>
                            <Col xs={12}>
                                <TracksGallery items={this.state.tracks}/>
                            </Col>
                            <Col xs={12}>
                                <ListGroup>
                                    <ListGroupItem>
                                        {
                                            this.state.relatedArtists ?
                                                this.state.relatedArtists.map((artist, index) => {
                                                    return (
                                                        <ArtistProfile
                                                            small
                                                            key={index}
                                                            artist={artist}
                                                        />
                                                    )
                                                })
                                                :
                                                null
                                        }
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                        :
                        null
                }
            </ContainerWithSidebar>
        )
    }
}

export default Home;