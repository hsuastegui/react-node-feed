import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

const Tweet = ({tweet}) => {
  const cleanText = () => {
    return tweet.text.replace(/https:\/\/t\.co\/([a-zA-Z0-9_]{10})/g, '');
  };
  const hasSymbol = () => {
    return tweet.text.search(/\$[a-zA-Z]+/g);
  };
  const getUrl = () => {
    if(tweet.hasOwnProperty('entities') && tweet.entities.hasOwnProperty('urls') && tweet.entities.urls[0]){
      return tweet.entities.urls[0].expanded_url;
    }
    return '#';
  };
  const getClassName = () => {
    let name = 'Tweet_item ';
    if(hasSymbol() > -1){
      name += 'Tweet_item-info';
    }else if(tweet.retweet_count > 5 || tweet.favorite_count > 5){
      name += 'Tweet_item-warning';
    }
    return name;
  };
  return(
    <View style={{borderWidth: 1, marginBottom: 10, padding: 10}}>
      <Text>{cleanText()}</Text>
      <Text>{moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').format('LLLL')}</Text>
      <Text>{tweet.user.name}</Text>
      <Text>Retweets: {tweet.retweet_count}</Text>
      <Text>Favs: {tweet.favorite_count}</Text>
    </View>
  );
};

export default Tweet;
