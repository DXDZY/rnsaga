/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import CarDetail from './src/container/CarDetail';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Provider store={store}>
        <CarDetail />
      </Provider>
    )
  }
}
 
export default App;


