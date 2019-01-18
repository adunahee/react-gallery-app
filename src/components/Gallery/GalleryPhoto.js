import React, { Component } from 'react';

class GalleryPhoto extends Component {

    render() {
        return (
        <img src={this.props.photoObj.path} 
             key={this.props.key}
             alt={this.props.photoObj.description}></img>
        )
    }
}

export default GalleryPhoto;