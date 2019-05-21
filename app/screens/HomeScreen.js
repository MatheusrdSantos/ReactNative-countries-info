import React, { Component } from 'react'

import AppContainer from '../components/AppContainer'



class HomeScreen extends Component {
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