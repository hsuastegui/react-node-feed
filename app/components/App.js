import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';
import SearchForm from './SearchForm';
import TweetList from './TweetList';

class App extends Component {
  state = {
    tweets: []
  };
  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then(response => {
      this.setState({
        tweets: response.data
      });
    });
    this.socket = SocketIOClient('http://localhost:8080');
    this.socket.on('update', data => {
      this.setState({
       tweets: data
      });
    });
  }
  componentWillUnmount(){
    this.socket.disconnect();
  }
  render() {
    return (
      <View>
        <SearchForm />
        <TweetList tweets={this.state.tweets} />
      </View>
    );
  }
}

export default App;
