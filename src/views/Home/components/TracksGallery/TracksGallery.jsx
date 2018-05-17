import React, {Component} from 'react';
import Gallery from "../../../../components/Gallery/Gallery";

class TracksGallery extends Component {
    render() {
        const galleryItems = [];

        this.props.items.map(track => galleryItems.push(<TracksGalleryItem track={track}/>));

        return (
            <Gallery items={galleryItems}/>
        )
    }
}

const TracksGalleryItem = (track) => {
    console.log(track);
    return (
        <div>
            {track.name}
        </div>
    )
};

export default TracksGallery;