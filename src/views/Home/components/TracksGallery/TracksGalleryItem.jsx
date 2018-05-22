import React, {Component} from 'react';
import './TracksGallery.css';
import {MdPauseCircleFilled, MdPlayCircleFilled} from "react-icons/lib/md/index";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TracksGalleryItem extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="baseTransition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500}
            >
                <div
                    key={this.props.track.name}
                    className={`track${this.props.playing ? ' playing' : ''}`}
                    onClick={this.props.onClick}
                >
                    <img
                        className="track--image"
                        src={this.props.track.album.images[0].url}
                        alt={this.props.track.name}
                    />
                    <div
                        className="track--label text-truncate"
                    >
                        {this.props.track.name}
                    </div>
                    {
                        this.props.track.preview_url ?
                            <div
                                className="track--toggle"
                            >
                                {this.props.playing ? <MdPauseCircleFilled/> : <MdPlayCircleFilled/>}
                            </div>
                            :
                            null
                    }

                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default TracksGalleryItem;