import React, {Component} from 'react';
import './RelatedArtists.css';
import {ListGroup, ListGroupItem} from "reactstrap";
import ArtistProfile from "../ArtistProfile/ArtistProfile";

class RelatedArtists extends Component {

    render() {

        return (
            <ListGroup className="related-artists">
                {
                    this.props.items ?
                        this.props.items.map((artist, index) => {
                            return (
                                <ListGroupItem
                                    key={index}
                                    className="related-artists--item"
                                >
                                    <ArtistProfile
                                        small
                                        artist={artist}
                                        genres={this.props.showGenres !== undefined ? this.props.showGenres : true}
                                        onClick={() => this.props.searchMethod(artist.name)}
                                    />
                                </ListGroupItem>
                            )
                        })
                        :
                        null
                }
            </ListGroup>
        )
    }
}

export default RelatedArtists;