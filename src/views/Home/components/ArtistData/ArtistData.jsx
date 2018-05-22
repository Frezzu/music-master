import React, {Component} from 'react';
import TracksGallery from "../TracksGallery/TracksGallery";
import RelatedArtists from "../RelatedArtists/RelatedArtists";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import {Col, Row} from "reactstrap";
import {FaSpotify} from "react-icons/lib/fa/index";

class ArtistData extends Component {

    render() {
        const {artist, relatedArtists, tracks, searchForArtist} = this.props;

        if (artist === undefined) {
            return (
                <Row>
                    <Col xs={12}>
                        <div className="home--artist-not-found">Sorry we couldn't find that artist.</div>
                    </Col>
                </Row>
            )
        } else if (artist !== null) {
            return (
                <Row>
                    <Col
                        xs={12}
                        className="home--artist-profile"
                    >
                        <ArtistProfile
                            artist={artist}
                            genres={true}
                            icons={
                                <div>
                                    <a href={artist.external_urls.spotify} target="_blank"
                                       className="icon-link"><FaSpotify/></a>
                                </div>
                            }
                        />
                    </Col>
                    <Col
                        className="home--tracks-gallery"
                        xs={12} md={8}
                    >
                        <h2>Albums</h2>
                        <TracksGallery items={tracks}/>
                    </Col>
                    <Col
                        className="home--related-artists"
                        xs={12} md={4}
                    >
                        <h2>Related Artists</h2>
                        <RelatedArtists items={relatedArtists}
                                        searchMethod={searchForArtist}/>
                    </Col>
                </Row>
            )
        }

        return null;
    }
}

export default ArtistData;