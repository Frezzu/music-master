import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (

            <div className={`profile ${this.props.className}`}>
                <div className="profile--image-wrapper">
                    <img
                        className="profile--image img-thumbnail rounded-circle"
                        src={this.props.image}
                        alt={this.props.name}
                    />
                </div>
                <div className="profile--content">
                    <div className="profile--content-name text-truncate">
                        {this.props.name}
                    </div>
                    <div className="profile--content-others">
                        {this.props.children}
                    </div>
                    {
                        this.props.icons ?
                            <div className="profile--icons">
                                {this.props.icons}
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default Profile;