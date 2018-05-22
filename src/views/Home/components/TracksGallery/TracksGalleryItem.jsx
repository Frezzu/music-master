import React, {Component} from 'react';
import './TracksGallery.css';
import {MdPauseCircleFilled, MdPlayCircleFilled} from "react-icons/lib/md/index";

class TracksGalleryItem extends Component {

    render() {
        return (
            <div
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
        )
    }
}

export default TracksGalleryItem;