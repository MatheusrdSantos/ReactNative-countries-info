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
import AppContainer from './components/AppContainer';
import Navigator from './screens/Navigator';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <AppContainer></AppContainer> */}
                <Navigator></Navigator>
            </Provider>
        );
    }
}


export default App;
