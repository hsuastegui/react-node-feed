import Expo from 'expo';
import axios from 'axios';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import App from './components/App';
import SearchResults from './components/SearchResults';
import styles from './components/Styles';

const Main = () => {
  return (
    <NativeRouter>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Feed</Text>
        <View style={styles.container}>
          <Link to="/" style={styles.link}><Text>Home</Text></Link>
          <Route exact path="/" component={App}/>
          <Route path="/search/:term" component={SearchResults}/>
        </View>
      </View>
    </NativeRouter>
  );
}

Expo.registerRootComponent(Main);
