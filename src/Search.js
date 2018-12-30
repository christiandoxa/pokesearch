import React from 'react';
import {View} from 'react-native';
import {Header, Icon, Input, Item} from 'native-base';
import axios from 'axios';
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";

class Search extends React.Component {
    state = {
        pokeSearch: '',
        onCall: true,
        data: {}
    };

    searchPoke = () => {
        this.setState({onCall: true});
        const self = this;

        axios.get("http://pokeapi.salestock.net/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
            .then(({data}) => {
                self.setState({data, onCall: false});
            })
            .catch(error => {
                console.log(error)
            });
    };

    renderBody = () => {
        if (this.state.onCall) {
            return <PokeLoader/>;
        } else {
            return <SearchBody data={this.state.data}/>;
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    searchBar
                    rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input
                            autoCorrect={false}
                            value={this.state.pokeSearch}
                            placeholder="Search Pokemon"
                            onChangeText={pokeSearch => this.setState({pokeSearch})}/>
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}

export default Search;