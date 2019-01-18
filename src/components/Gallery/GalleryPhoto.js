import React, { Component } from 'react';
import Axios from 'axios';

class GalleryPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
        }
    }

    handlePhotoClick = () => {
        let newClick = !this.state.selected;
        this.setState({
            selected: newClick,
        });
    };

    handleLikeButton = () => {
        Axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.photoObj.id}`
        }).then((response) => {
            this.props.refreshGallery();
        }).catch((error) => {
            console.log(`error in handleLikeButton PUT`, error);
        })
    };

    photoSide = () => {
        if (this.state.selected === false) {
            return (
                <div >
                    <img
                        src={this.props.photoObj.path}
                        key={this.props.key}
                        alt={this.props.photoObj.description}
                        onClick={this.handlePhotoClick}
                        className="photo-box"
                    >
                    </img>
                    <br />
                    <span>{this.props.photoObj.likes} likes.</span>
                    <br />
                    <button onClick={this.handleLikeButton}>Like!</button>
                </div>

            )
        } else {
            return (
                <div>
                    <div className="photo-box">
                        <p onClick={this.handlePhotoClick}>
                            {this.props.photoObj.description}
                        </p>
                    </div>
                    <br />
                    <span>{this.props.photoObj.likes} likes.</span>
                    <br />
                    <button onClick={this.handleLikeButton}>Like!</button>
                </div>
            )
        }
    }
    render() {
        return (
            this.photoSide()
        )
    }
}

export default GalleryPhoto;