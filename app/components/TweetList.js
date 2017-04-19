import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Tweet from './Tweet';

class TweetList extends Component {
  static defaultProps = {
    tweets: []
  };
  renderTweets(){
    return this.props.tweets.map(tweet => {
      return <Tweet key={tweet.id} tweet={tweet} />
    });
  }
  render() {
    return (
      <View>
        <ScrollView>
          {this.renderTweets()}
        </ScrollView>
        {this.props.tweets.length ? null : <Text>Loading...</Text>}
      </View>
    );
  }
}

export default TweetList;
