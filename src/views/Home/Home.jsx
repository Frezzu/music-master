import React, {Component} from 'react';
import './Home.css';
import ContainerWithSidebar from "../../components/containers/ContainerWithSidebar/ContainerWithSidebar";
import SearchForm from "../../components/SearchForm/SearchForm";
import spotifyService from "../../services/spotify/SpotifyService";
import {Col, Row} from "reactstrap";
import HistorySidebar from "./components/HistorySidebar/HistorySidebar";
import ArtistProfile from "./components/ArtistProfile/ArtistProfile";
import TracksGallery from "./components/TracksGallery/TracksGallery";
import RelatedArtists from "./components/RelatedArtists/RelatedArtists";
import {connect} from "react-redux";
import {addToSearchHistory} from "./home-actions";

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
        spotifyService.findArtist(query)
            .then(artist => {
                this.setState({artist});
                this.props.addToSearchHistory(artist);

                spotifyService.getArtistTopTracks(artist.id)
                    .then(tracks => this.setState({tracks}));

                spotifyService.getRelatedArtists(artist.id, 6)
                    .then(relatedArtists => this.setState({relatedArtists}));
            });
    }

    render() {
        return (
            <ContainerWithSidebar
                className="home"
                sidebar={<HistorySidebar items={this.props.homeReducer.searchHistory}/>}
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
                                    genres={true}
                                />
                            </Col>
                            <Col xs={12} md={8}>
                                <TracksGallery items={this.state.tracks}/>
                            </Col>
                            <Col xs={12} md={4}>
                                <RelatedArtists items={this.state.relatedArtists}
                                                searchMethod={this.searchForArtist.bind(this)}/>
                            </Col>
                        </Row>
                        :
                        null
                }
            </ContainerWithSidebar>
        )
    }
}

export default connect(
    (state) => {
        return {
            homeReducer: state.homeReducer
        }
    },
    {addToSearchHistory}
)(Home);