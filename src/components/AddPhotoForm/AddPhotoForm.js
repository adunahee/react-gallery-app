import React, { Component } from 'react';
import axios from 'axios';

class AddPhotoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/gallery',
            data: this.state,
        }).then((response)=> {
            this.props.refreshGallery();
        }).catch((error)=> {
            alert(`Unable to submit your picture at this time.`)
            console.log(error);
        })
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
    })
    //console.log(event.target.value);
}


    render() {

        console.log(this.state);
        return(
            
            <form onSubmit={this.handleFormSubmit}>
            <h2>Form to Add New Photo</h2>
            <p>All Fields are Required.</p>
                <label htmlFor="path">URL for Photo</label>
                <input id="path" 
                       type="url" 
                       placeholder="http://example.com"
                       onChange={this.handleFormChange}
                       required>
                </input>
                <br/>
                <label htmlFor="description">Description for Photo</label>
                <textarea id="description" 
                          maxLength="240"  
                          placeholder="240 character maximum"
                          onChange={this.handleFormChange}
                          required>
                </textarea>
                <br/>
            
                <label htmlFor="year">Year Taken</label>
                <input id="year" 
                       placeholder="YYYY" 
                       maxLength="4" 
                       type="text"
                       //uses regular expression to validate for year range between 1826 nad 2059
                       pattern="^[1][8][2][6-9]|[1][8][3-9][0-9]| [1][9][0-9]{1,2}|[2][0][05][0-9]$"
                       onChange={this.handleFormChange}
                       required>
                </input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddPhotoForm;