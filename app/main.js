import Expo from 'expo';
import axios from 'axios';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import App from './components/App';
import SearchResults from './components/SearchResults';
import Styles from './components/Styles';

const Main = () => {
  return (
    <NativeRouter>
      <View style={Styles.mainContainer}>
        <Text style={Styles.header}>Feed</Text>
        <View style={Styles.container}>
          <Link to="/" style={Styles.link}><Text>Home</Text></Link>
          <Route exact path="/" component={App}/>
          <Route path="/search/:term" component={SearchResults}/>
        </View>
      </View>
    </NativeRouter>
  );
}

Expo.registerRootComponent(Main);
