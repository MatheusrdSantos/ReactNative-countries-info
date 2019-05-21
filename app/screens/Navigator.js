import React, { Component } from 'react';
import Home from '../screens/HomeScreen';
import CountryDetails from '../screens/CountryDetailsScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export const Navigator = createStackNavigator({
  Home: { screen: Home },
  CountryDetails: { screen: CountryDetails },
},{
  initialRouteName: 'Home',
})

/* class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
} */
const Nav = createAppContainer(Navigator);
      
export default Nav