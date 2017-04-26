import React, { Component } from "react";
import SocketIOClient from "socket.io-client";
import axios from "axios";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import TweetList from "./TweetList";
import "./App.css";

class App extends Component {
  state = {
    tweets: [],
    term: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/")
      .then(response => {
        this.setState({
          tweets: response.data
        });
      })
      .catch(e => {
        console.error("server not running");
      });
    this.socket = SocketIOClient("http://localhost:8080");
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
      <section className="App container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <ul className="nav nav-pills">
              <li className={this.state.term ? 'active' : ''}>
                <a href="#" onClick={this.handleClick}>
                  <i className="fa fa-home" /> Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 text-right">
            <SearchForm handleForm={this.handleForm} />
          </div>
        </div>
        {this.state.term !== ""
          ? <SearchResults term={this.state.term} />
          : <div><h1>Feed</h1><TweetList tweets={this.state.tweets} /></div>}
      </section>
    );
  }
  handleForm = term => {
    this.setState({ term });
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({ term: "" });
  };
}

export default App;
