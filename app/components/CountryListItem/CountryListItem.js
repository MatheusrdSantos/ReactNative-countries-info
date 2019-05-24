import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {selectCountry} from '../../actions'
import {Card, CardItem, Body, Thumbnail, Icon} from 'native-base';

class CountryListItem extends Component{
    callDetails = () => {
        this.props.setCountry(this.props.country)
        this.props.callDetails(this.props.country)
    }
    generateFlagUrl = ()=>{
        let url = `https://www.countryflags.io/${this.props.country.alpha2Code}/flat/64.png`;
        console.log(url);
        return url;
    }
    render(){
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Body>
                        <View style={styles.container} onTouchEnd={this.callDetails}>
                            <Thumbnail style={styles.icon} square small source={{uri: this.generateFlagUrl()}} />
                            <View style={styles.containerText}>
                                <Text style={styles.countryName}>{`${this.props.country.name} (${this.props.country.alpha2Code})`}</Text>
                                <View style={{flex:1, flexDirection: "row"}}>
                                    <Icon style={{fontSize: 15, color: '#4F4F57', marginRight: 5, alignSelf: "flex-end"}} type="MaterialIcons" name="people"/>
                                    <Text style={styles.countryPopulation}>
                                        {this.props.country.population}
                                    </Text>
                                </View>
                            </View>
                        </View> 
                    </Body>
                </CardItem>
            </Card>
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