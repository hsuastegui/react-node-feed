import React, { Component } from "react";
import SocketIOClient from "socket.io-client";
import axios from "axios";
import Navigation from "./Navigation";
import TweetList from "./TweetList";
import Config from "./Config";
import "./App.css";

class App extends Component {
  state = {
    tweets: []
  };
  componentDidMount() {
    axios
      .get(Config.server_url)
      .then(response => {
        this.setState({
          tweets: response.data
        });
      })
      .catch(e => {
        console.error("server not running");
      });
    this.socket = SocketIOClient(Config.server_url);
    this.socket.on("update", data => {
      this.setState({
        tweets: data
      });
    });
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }
  render() {
    return (
      <div>
        <Navigation
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
        <h1>Feed</h1>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
