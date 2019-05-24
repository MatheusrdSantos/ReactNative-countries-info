import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {selectCountry} from '../../actions'
class CountryListItem extends Component{
    callDetails = () => {
        this.props.setCountry(this.props.country)
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

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCountry: (country) => dispatch(selectCountry(country))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryListItem);