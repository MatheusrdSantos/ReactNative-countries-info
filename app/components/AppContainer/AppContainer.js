import React, {Component} from 'react';
import {View, Text, Button, SectionList, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {requestCountries} from '../../actions';
import CountryListItem from '../CountryListItem';
class AppContainer extends Component{    
    
    componentDidMount() {
        this.props.requestCountries()
    }
    applyFilter(filter){
        let countries = []
        console.log(this.countries)
        if(filter == ''){
            return this.props.countries;
        }
        this.props.countries.forEach((element) => {
            if(element.name.toUpperCase().includes(this.props.filter.toUpperCase())){
                countries.push(element);
            }
        });
        return countries;
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                data={
                    this.applyFilter(this.props.filter)
                }
            
                renderItem={({item,index, section}) => <CountryListItem country={item} callDetails={this.props.callDetails}></CountryListItem>}
                keyExtractor={(item, index) => item.name}
            />
            </View>   
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries.all,
        filter: state.countries.filter
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        requestCountries: () => dispatch(requestCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);