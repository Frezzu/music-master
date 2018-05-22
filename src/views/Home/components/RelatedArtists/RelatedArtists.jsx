import React, {Component} from 'react';
import './RelatedArtists.css';
import {ListGroup, ListGroupItem} from "reactstrap";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import FaSpotify from 'react-icons/lib/fa/spotify';
import MdSearch from 'react-icons/lib/md/search';

class RelatedArtists extends Component {


    render() {
        return (
            <ListGroup className="related-artists">
                {
                    this.props.items.length > 0 ?
                        this.props.items.map((artist, index) => {
                            const spotifyLink = artist.external_urls.spotify;

                            return (
                                <ListGroupItem
                                    key={index}
                                    className="related-artists--item"
                                >
                                    <ArtistProfile
                                        small
                                        artist={artist}
                                        genres={this.props.showGenres !== undefined ? this.props.showGenres : true}
                                        icons={
                                            <div>
                                                <a href={spotifyLink} target="_blank" className="icon-link"><FaSpotify/></a>
                                                <MdSearch onClick={() => {
                                                    if (this.props.searchMethod !== undefined)
                                                        this.props.searchMethod(artist.name)
                                                }}/>
                                            </div>
                                        }
                                    />
                                </ListGroupItem>
                            )
                        })
                        :
                        <div className="grey-text"><em>No related artist specified.</em></div>
                }
            </ListGroup>
        )
    }
}

export default RelatedArtists;