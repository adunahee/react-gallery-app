import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gallery: []
    };
  }

  componentDidMount () {
    this.refreshGallery();
  }

  refreshGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      this.setState({
        gallery: response.data,
      });
      //console.log(`in refresh gallery`, response.data);
    }).catch((error)=> {
      console.log(`Error in refresh gallery`, error);
    })
  }

  render() {
    //console.log(this.state.gallery);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
