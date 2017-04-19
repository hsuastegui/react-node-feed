import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './SearchForm';
import TweetList from './TweetList';

class SearchResults extends Component {
  state = {
    tweets: []
  };
  componentDidMount(){
    axios.get(`http://localhost:8080/search/${this.props.match.params.term}`)
    .then(response => {
      this.setState({
        tweets: response.data.statuses
      });
    });
  }
  render(){
    return(
      <section className="container">
        <ul className="nav nav-pills">
          <li role="presentation" className="active"><Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
        </ul>
        <h1>Search Results {this.props.match.params.term}</h1>
        <SearchForm />
        <TweetList tweets={this.state.tweets} />
      </section>
    );
  }
};

export default SearchResults;
