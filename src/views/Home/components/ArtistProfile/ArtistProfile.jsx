import React, {Component} from 'react';
import './ArtistProfile.css';
import Profile from "../../../../components/Profile/Profile";

class ArtistProfile extends Component {

    render() {
        const {artist} = this.props;

        return (
            <Profile
                className={`artist-profile ${this.props.small ? 'small' : ''}`}
                name={artist.name}
                image={artist.images[0].url}
                icons={this.props.icons}
            >
                <div><b>Followers: </b> {artist.followers.total}</div>
                {
                    this.props.genres ?
                        <div>
                            <b>Genres: </b>
                            {
                                artist.genres.map((genre, index) => {
                                    genre = genre !== artist.genres[artist.genres.length - 1] ? `${genre}, ` : `${genre}`;
                                    return (
                                        <span key={index}>{genre}</span>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }
            </Profile>
        )
    }

}

export default ArtistProfile;