import React from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {List, ListItem} from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class SearchBody extends React.Component {
    render() {
        const pokemon = this.props.data;
        if (!pokemon) {
            return <View/>;
        }
        return (
            <ImageBackground style={styles.backgroundImage}
                             source={require('../assets/raids_loading.png')}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image
                            source={{uri: pokemon.sprites.front_default}}
                            style={styles.img}/>
                    </View>
                    <View style={styles.info}>
                        <ListItem
                            itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height - {pokemon.height / 10}m</Text>
                        </ListItem>
                        <ListItem
                            itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={item =>
                                <ListItem>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>
                            }>
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height,
        width
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    }
};

export default SearchBody;