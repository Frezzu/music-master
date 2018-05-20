import React, {Component} from 'react';
import './RelatedArtists.css';
import Gallery from "../../../../components/Gallery/Gallery";
import TracksGalleryItem from "./TracksGalleryItem";

class TracksGallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            playingUrl: '',
            playingTrackId: null,
            audio: null
        }
    }

    playAudio(trackId, previewUrl) {
        if (previewUrl) {
            const audio = new Audio(previewUrl);

            if (!this.state.playing) {
                audio.play();

                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    playingTrackId: trackId,
                    audio: audio
                });
            } else if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();

                this.setState({
                    playing: false,
                    playingTrackId: null,
                });
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    playingTrackId: trackId,
                    audio
                })
            }
        }
    }

    render() {
        const galleryItems = [];

        this.props.items.map(track => galleryItems.push(
            <TracksGalleryItem
                track={track}
                playing={this.state.playingTrackId === track.id}
                onClick={() => this.playAudio(track.id, track.preview_url)}
            />
        ));

        return (
            <Gallery items={galleryItems}/>
        )
    }
}

export default TracksGallery;