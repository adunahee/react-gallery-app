import React, { Component } from 'react';

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
        })
    }

    photoSide = () => {
        if(this.state.selected === false){
            return (
                <img
                    src={this.props.photoObj.path}
                    key={this.props.key}
                    alt={this.props.photoObj.description}
                    onClick={this.handlePhotoClick}>
                </img>
            )
        } else {
            return (
                <div>
                    <p onClick={this.handlePhotoClick}>
                        {this.props.photoObj.description}
                    </p>
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