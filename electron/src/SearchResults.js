import React, { Component } from 'react';
import axios from 'axios';
import TweetList from './TweetList';

class SearchResults extends Component {
  state = {
    tweets: []
  };
  componentDidMount(){
    axios.get(`http://localhost:8080/search/${this.props.term}`)
    .then(response => {
      this.setState({
        tweets: response.data.statuses
      });
    });
  }
  render(){
    return(
      <div>
        <h1>Search results for: {this.props.term}</h1>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default SearchResults;
