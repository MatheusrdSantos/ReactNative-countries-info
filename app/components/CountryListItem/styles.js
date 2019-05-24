import {StyleSheet} from 'react-native';

/*
* Styles for CountryListItem 
*/

export default StyleSheet.create({
    card:{
        marginLeft: 10,
        marginRight: 10,
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countryName:{
        flex:1,
        textAlign: 'left'
    },
    countryPopulation:{
        textAlign: 'left'
    },
    icon:{
        marginRight: 10
    },
    containerText:{
        flex:1,
        flexDirection: "column"
    }
});