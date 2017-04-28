import React, { Component } from "react";
import axios from "axios";
import Config from "./Config";
import Navigation from "./Navigation";
import TweetList from "./TweetList";

class SearchResults extends Component {
  state = {
    tweets: []
  };
  componentDidMount() {
    axios
      .get(`${Config.server_url}/search/${this.props.match.params.term}`)
      .then(response => {
        this.setState({
          tweets: response.data.statuses
        });
      });
  }
  render() {
    return (
      <div>
        <Navigation
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
        <h1>Search results for: {this.props.match.params.term}</h1>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default SearchResults;
