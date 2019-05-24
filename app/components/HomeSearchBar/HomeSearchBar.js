import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import {setCountriesFilter} from '../../actions';
class HomeSearchBar extends Component{
    render(){
        return (
            <Header searchBar rounded style={{backgroundColor: '#373681'}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" onChangeText={(text) => this.props.setFilter(text)} />
                    <Icon type="MaterialIcons" name="place" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        );
    }
}
mapStateToProps = (state) =>{
    return {};
}

mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => dispatch(setCountriesFilter(filter))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchBar)