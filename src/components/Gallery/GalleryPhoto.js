import React, { Component } from 'react';
import Axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

    handleDeleteButton = () => {
        Axios({
            method: 'DELETE',
            url: `/gallery/delete/${this.props.photoObj.id}`
        }).then((response) => {
            this.props.refreshGallery();
        }).catch((error) => {
            console.log(`error in handleDeleteButton DELETE`, error);

        })
    }

    flipPhoto = () => {
        if (this.state.selected === false) {
            return (
                <CardContent onClick={this.handlePhotoClick}>
                    <img
                        src={this.props.photoObj.path}
                        key={this.props.key}
                        alt={this.props.photoObj.description}
                        onClick={this.handlePhotoClick}
                        className="photo-box"
                    ></img>
                    <Typography className="transparent" onClick={this.handlePhotoClick}>
                            {this.props.photoObj.description}
                    </Typography>
                    <Typography>
                        <span>{this.props.photoObj.likes} likes.</span>
                    </Typography>
                </CardContent>
            )
        } else {
            return (
                <CardContent onClick={this.handlePhotoClick}>
                    <img
                        src={this.props.photoObj.path}
                        key={this.props.key}
                        alt={this.props.photoObj.description}
                        className="transparent photo-box"
                        onClick={this.handlePhotoClick}
                    ></img>
                    <Typography onClick={this.handlePhotoClick}>
                            {this.props.photoObj.description}
                    </Typography>
                    <Typography>
                        <span className="transparent">{this.props.photoObj.likes} likes.</span>
                    </Typography>
                </CardContent>
            )
        }
    }
    render() {
        return (
            <Card className="photo-card" >
                {this.flipPhoto()}
                <CardActions className="photo-bar">
                    <Button variant="contained"
                        color="primary"
                        onClick={this.handleLikeButton}>
                        Like!
                        </Button>
                    <Button variant="contained"
                        color="secondary"
                        onClick={this.handleDeleteButton}>
                        Delete
                            <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default GalleryPhoto;