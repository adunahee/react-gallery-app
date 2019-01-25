import React, {Component} from 'react';
import GalleryPhoto from './../Gallery/GalleryPhoto';


class Gallery extends Component {
    
    buildGalleryPhotos = () => {
        return this.props.gallery.map(
            (photoObj, index) => {
            return <GalleryPhoto 
                        photoObj={photoObj} 
                        key={index}
                        refreshGallery={this.props.refreshGallery} />
        });
    }

    render() {
        return(
        <div className="gallery-tabletop">
            {this.buildGalleryPhotos()}
        </div>
        )
    }

}

export default Gallery;