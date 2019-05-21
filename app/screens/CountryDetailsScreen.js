import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native';

class CountryDetailsScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>Name: {this.props.navigation.getParam('data').name}</Text>
            <Text style={styles.textItem}>Capital: {this.props.navigation.getParam('data').capital}</Text>
            <Text style={styles.textItem}>Area: {this.props.navigation.getParam('data').area}</Text>
            <Text style={styles.textItem}>Populatiom: {this.props.navigation.getParam('data').population}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textItem:{
        alignSelf: 'center'
    }
});
      
export default CountryDetailsScreen