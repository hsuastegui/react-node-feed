import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import Styles from './Styles';

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
    <View style={Styles.tweet}>
      <Text style={{fontWeight:'bold', marginBottom: 5}}>{cleanText()}</Text>
      <Text style={{fontStyle: 'italic', marginBottom: 5}}>{moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').format('LLLL')}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{tweet.user.name}</Text>
        <Text style={{marginLeft: 10}}>Retweets: {tweet.retweet_count}</Text>
        <Text style={{marginLeft: 10}}>Favs: {tweet.favorite_count}</Text>
      </View>
    </View>
  );
};

export default Tweet;
