import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native';
import {Separator, ListItem, Text, Container, Content} from 'native-base';
import {connect} from 'react-redux'

class CountryDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('data').name,
            headerStyle: {
                backgroundColor: '#373681',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        };
    };
    formatBorders = ()=>{
        let borders = ""
        let sep = ", "
        let size = this.props.country.borders.length
        this.props.country.borders.forEach((element, index) => {
            if(index == size-1){
                borders+=element
            }else{
                borders+=element+sep
            }
        })
        return borders
    }
    formatLanguages = ()=>{
        let lang = ""
        let sep = ", "
        let size = this.props.country.languages.length
        this.props.country.languages.forEach((element, index) => {
            if(index == size-1){
                lang+=element.name
            }else{
                lang+=element.name+sep
            }
        })
        return lang
    }
    formatTimezones = ()=>{
        let tz = ""
        let sep = ", "
        let size = this.props.country.timezones.length
        this.props.country.timezones.forEach((element, index) => {
            if(index == size-1){
                tz+=element
            }else{
                tz+=element+sep
            }
        })
        return tz
    }
    formatCurrencies = () => {
        let curr = ""
        this.props.country.currencies.forEach(element => {
            curr+=element.code+" - "+element.name+" - "+element.symbol+"\n"
        });
        return curr
    }
    formatBlocs = () => {
        let blocs = ""
        let size = this.props.country.regionalBlocs.length
        this.props.country.regionalBlocs.forEach((element, index) => {
            if(index == (size-1)){
                blocs+=element.acronym+" - "+element.name
            }else{
                blocs+=element.acronym+" - "+element.name+", "
            }
        });
        return blocs
    }
    render() {
        return (
            <Content>
                <Separator bordered>
                    <Text>General info</Text>
                </Separator>
                <ListItem>
                    <Text>Name: {this.props.country.name}</Text>
                </ListItem>
                <ListItem>
                    <Text>Demonym: {this.props.country.demonym}</Text>
                </ListItem>
                <ListItem last>
                    <Text>Capital: {this.props.country.capital}</Text>
                </ListItem>
                <Separator bordered>
                    <Text>Geography</Text>
                </Separator>
                <ListItem>
                    <Text>Area: {this.props.country.area}</Text>
                </ListItem>
                <ListItem>
                    <Text>Population: {this.props.country.population}</Text>
                </ListItem>
                <ListItem>
                    <Text>Languages: {this.formatLanguages()}</Text>
                </ListItem>
                <ListItem>
                    <Text>Timezones: {this.formatTimezones()}</Text>
                </ListItem>
                <ListItem>
                    <Text>Region: {this.props.country.region}</Text>
                </ListItem>
                <ListItem>
                    <Text>Subregion: {this.props.country.subregion}</Text>
                </ListItem>
                <ListItem last>
                    <Text>Borders: {this.formatBorders()}</Text>
                </ListItem>
                <Separator bordered>
                    <Text>Economy</Text>
                </Separator>
                <ListItem>
                    <Text>Currency: {this.formatCurrencies()}</Text>
                </ListItem>
                <ListItem last>
                    <Text>Regional Blocks: {this.formatBlocs()}</Text>
                </ListItem>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    container:{
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