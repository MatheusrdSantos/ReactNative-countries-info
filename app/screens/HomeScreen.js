import React, { Component } from 'react'
import {TextInput} from 'react-native';
import {connect} from 'react-redux';
import AppContainer from '../components/AppContainer'
import HomeSearchBar from '../components/HomeSearchBar';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header:(
            <HomeSearchBar></HomeSearchBar>
        ),
        headerStyle: {
            backgroundColor: '#373681',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };
    callDetailsScreen = (payload) => {
        this.props.navigation.navigate('CountryDetails', {data:payload})
    }
    render() {
        return (
        <AppContainer callDetails={this.callDetailsScreen}></AppContainer>
        )
    }
}

export default HomeScreen