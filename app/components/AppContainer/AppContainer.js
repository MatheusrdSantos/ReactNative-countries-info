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
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                data={
                    this.props.countries
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
        countries: state.countries.all
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        requestCountries: () => dispatch(requestCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);