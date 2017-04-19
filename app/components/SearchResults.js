import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Link } from 'react-router-native';
import axios from 'axios';
import SearchForm from './SearchForm';
import TweetList from './TweetList';
import styles from './Styles';

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
      <View>
        <SearchForm />
        <Text style={{marginBottom:10}}>
          Search Results for: {this.props.match.params.term}
        </Text>
        <TweetList tweets={this.state.tweets} />
      </View>
    );
  }
};

export default SearchResults;
