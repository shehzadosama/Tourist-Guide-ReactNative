/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen'

var config = {
  apiKey: "AIzaSyBPvF9fLQSLbUROqxwS2rHrBO8qdD9YA8U",
  authDomain: "image-slider-81f14.firebaseapp.com",
  databaseURL: "https://image-slider-81f14.firebaseio.com",
  projectId: "image-slider-81f14",
  storageBucket: "image-slider-81f14.appspot.com",
  messagingSenderId: "472079717520"
};
firebase.initializeApp(config);
export default class TouristGuide extends Component {
  render() {
    return (
      <Provider store={store}>

        <App />

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TouristGuide', () => TouristGuide);
