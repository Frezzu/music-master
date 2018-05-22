import React, {Component} from 'react';
import './Profile.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Profile extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="baseTransition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500}
            >
                <div key={this.props.name} className={`profile ${this.props.className}`}>
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
            </ReactCSSTransitionGroup>
        )
    }
}

export default Profile;