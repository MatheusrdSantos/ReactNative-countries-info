/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './reducers';
import AppContainer from './components/AppContainer'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer></AppContainer>
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
  countryName: {
    flexGrow: 1
  }
});

export default App;
