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

export default App;
