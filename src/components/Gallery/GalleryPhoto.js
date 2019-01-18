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
                <div >
                    <img
                        src={this.props.photoObj.path}
                        key={this.props.key}
                        alt={this.props.photoObj.description}
                        onClick={this.handlePhotoClick}
                        className="photo-box"
                        >
                    </img>
                    <br/>
                    <span>{this.props.photoObj.likes} likes.</span>
                    <br />
                    <button>Like!</button>
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
                    <button>Like!</button>
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