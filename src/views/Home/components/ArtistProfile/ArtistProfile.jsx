import React, {Component} from 'react';
import './ArtistProfile.css';
import Profile from "../../../../components/Profile/Profile";

class ArtistProfile extends Component {

    static ARTIST_IMAGE_PLACEHOLDER = '/images/profile-placeholder.png';

    render() {
        const {artist} = this.props;
        const imageUrl = artist.images.length > 0 ? artist.images[0].url : ArtistProfile.ARTIST_IMAGE_PLACEHOLDER;

        return (
            <Profile
                className={`artist-profile ${this.props.small ? 'small' : ''} ${this.props.mainArtist ? 'artist-profile--main-artist' : ''}`}
                name={artist.name}
                image={imageUrl}
                icons={this.props.icons}
            >
                <div><b>Followers: </b> {artist.followers.total}</div>
                {
                    this.props.genres && artist.genres.length > 0 ?
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
                        <div className="grey-text"><em>No genres specified.</em></div>
                }
            </Profile>
        )
    }

}

ArtistProfile.defaultProps = {
    mainArtist: false
};

export default ArtistProfile;