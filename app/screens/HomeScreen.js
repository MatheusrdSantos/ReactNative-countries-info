import React, { Component } from 'react'
import {TextInput} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import AppContainer from '../components/AppContainer'



class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header:(
            <Header searchBar rounded style={{backgroundColor: '#373681'}}>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon type="MaterialIcons" name="place" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
            </Header>
        ),
        headerStyle: {
            backgroundColor: '#373681',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };
    callDetailsScreen = (payload) => {
        this.props.navigation.navigate('CountryDetails', {data:payload})
    }
    render() {
        return (
        <AppContainer callDetails={this.callDetailsScreen}></AppContainer>
        )
    }
}
      
export default HomeScreen