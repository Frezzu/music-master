import React, {Component} from 'react';
import './Home.css';
import ContainerWithSidebar from "../../components/containers/ContainerWithSidebar/ContainerWithSidebar";
import SearchForm from "../../components/SearchForm/SearchForm";
import spotifyService from "../../services/spotify/SpotifyService";
import {Col, Row} from "reactstrap";
import HistorySidebar from "./components/HistorySidebar/HistorySidebar";
import {connect} from "react-redux";
import {addToSearchHistory} from "./home-actions";
import ArtistData from "./components/ArtistData/ArtistData";
import PrettyLoader from "../../components/PrettyLoader/PrettyLoader";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {toggleSidebar} from "../../components/Sidebar/sidebar-actions";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            tracks: [],
            relatedArtists: [],
            loading: false
        }
    }

    searchForArtist(query) {
        spotifyService.findArtist(query)
            .then(artist => {
                this.setState({
                    loading: true,
                    artist
                });
                this.props.addToSearchHistory(artist);

                Promise
                    .all([
                        spotifyService.getArtistTopTracks(artist.id),
                        spotifyService.getRelatedArtists(artist.id, 6)
                    ])
                    .then((values => {
                        this.setState({
                            tracks: values[0],
                            relatedArtists: values[1]
                        });
                    }))
                    .finally(() => this.setState({loading: false}));
            })
            .catch(reason => {
                console.log(reason);
                this.setState({
                    loading: false
                });
            });
    }

    render() {

        return (
            <ContainerWithSidebar
                className="home"
                sidebar={
                    <HistorySidebar searchMethod={this.searchForArtist.bind(this)}/>
                }
            >
                <Row className="home--header-section">
                    <Col className="home--header">
                        <h1 className="home--logo">MusicMaster</h1>
                        <SearchForm
                            disabled={this.state.loading}
                            className="home--search"
                            placeholder="Search for an artist..."
                            onSubmit={(event) => {
                                event.preventDefault();
                                this.searchForArtist(event.target.searchInput.value);
                            }}
                            onFocus={() => this.props.toggleSidebar(true)}
                        />
                    </Col>
                </Row>

                <ReactCSSTransitionGroup
                    transitionName="baseTransition"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    <Row key={Home} className="home--artist-data">
                        <PrettyLoader loading={this.state.loading}>
                            <ArtistData
                                artist={this.state.artist}
                                relatedArtists={this.state.relatedArtists}
                                tracks={this.state.tracks}
                                searchForArtist={this.searchForArtist.bind(this)}
                            />
                        </PrettyLoader>
                    </Row>
                </ReactCSSTransitionGroup>
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
    {
        addToSearchHistory,
        toggleSidebar
    }
)(Home);