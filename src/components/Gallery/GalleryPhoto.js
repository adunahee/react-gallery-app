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
                <div className="photo-box">
                    <img
                        src={this.props.photoObj.path}
                        alt={this.props.photoObj.description}
                        onClick={this.handlePhotoClick}
                    ></img>
                </div>
            )
        } else {
            return (
                <Typography className="photo-box">
                    <strong>{this.props.photoObj.description}</strong>
                </Typography>
            )
        }
    }

    buildLike = () => {
        switch (this.props.photoObj.likes) {
            case 0:
                return (
                    <span>Be the first to like this!</span>
                )
            case 1:
                return (
                    <span>One person liked this.</span>
                )
            default:
                return (
                    <span>{this.props.photoObj.likes} people liked this.</span>
                )
        }
    }

    render() {
        return (
            <Card className="photo-card" >
                <CardContent onClick={this.handlePhotoClick} className='card-content'>
                    {this.flipPhoto()}
                    <Typography>
                        {this.buildLike()}
                    </Typography>
                </CardContent>
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