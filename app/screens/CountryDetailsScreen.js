import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux'

class CountryDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('data').name,
        };
    };

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>Name: {this.props.country.name}</Text>
            <Text style={styles.textItem}>Capital: {this.props.country.capital}</Text>
            <Text style={styles.textItem}>Area: {this.props.country.area}</Text>
            <Text style={styles.textItem}>Populatiom: {this.props.country.population}</Text>
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
      
mapStateToProps = state =>{
    return {
        country: state.countries.selectedCountry
    };
}
mapDispatchToProps = dispatch =>{
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsScreen)