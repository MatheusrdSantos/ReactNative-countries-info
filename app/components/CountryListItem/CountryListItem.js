import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
class CountryListItem extends Component{
    callDetails = () => {
        this.props.callDetails(this.props.country)
    }

    render(){
        return (
            <View style={styles.container} onTouchEnd={this.callDetails}>
                <Text style={styles.countryName}>{this.props.country.name}</Text>
                <Text style={styles.countryPopulation}>{this.props.country.population}</Text>
            </View>
        );
    }
}

export default CountryListItem;