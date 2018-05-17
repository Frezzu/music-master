import React, {Component} from 'react';
import './style.css';
import Profile from "../../../../components/Profile/Profile";

class ArtistProfile extends Component {

    render() {
        const {artist} = this.props;

        return (
            <Profile
                className={`artist-profile ${this.props.small ? 'small' : ''}`}
                name={artist.name}
                image={artist.images[0].url}
            >
                <div><b>Followers: </b> {artist.followers.total}</div>
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
            </Profile>
        )
    }

}

export default ArtistProfile;