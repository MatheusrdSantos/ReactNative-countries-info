import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
class CountryListItem extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.countryName}>{this.props.country.name}</Text>
                <Text style={styles.countryPopulation}>{this.props.country.population}</Text>
            </View>
        );
    }
}

export default CountryListItem;