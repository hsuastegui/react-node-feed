import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import TweetList from './TweetList';
import './App.css';

class App extends Component {
  state = {
    tweets: []
  };
  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then(response => {
      this.setState({
        tweets: response.data
      })
    });
    const io = window.io;
    const socket = io('http://localhost:8080');
    socket.on('update', function (data) {
     this.setState({
       tweets: data
     });
    }.bind(this));
  }
  render() {
    return (
      <div className="App container">
        <h1>Feed</h1>
        <SearchForm />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
