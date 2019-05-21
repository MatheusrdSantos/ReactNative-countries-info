import React, {Component} from 'react';
import {View, Text, Button, SectionList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {requestCountries} from '../../actions';
import CountryListItem from '../CountryListItem';
class AppContainer extends Component{    
    render(){
        return (
            <View style={styles.container}>
                <Button onPress={()=>
                    {
                        this.props.requestCountries()   
                        console.log("btn press")
                    }
                } title="fetch"></Button>
                <SectionList
            sections={[
                {title: 'World Countries', data: this.props.countries},
            ]}
            
            renderItem={({item,index, section}) => <CountryListItem country={item} callDetails={this.props.callDetails}></CountryListItem>}

            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            
            keyExtractor={(item, index) => index+item}
            />
            </View>   
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        requestCountries: () => dispatch(requestCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);