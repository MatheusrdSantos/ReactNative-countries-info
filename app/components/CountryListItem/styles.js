import {StyleSheet} from 'react-native';

/*
* Styles for CountryListItem 
*/

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        borderColor: '#d6d7da'
    },
    countryName:{
        flex:1,
        textAlign: 'left'
    },
    countryPopulation:{
        textAlign: 'right'
    }
});