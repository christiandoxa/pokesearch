import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Button} from "native-base";

const myBackground = require('../assets/landing.jpg');

class Landing extends React.Component {
    render() {
        return (
            <ImageBackground source={myBackground} style={{flex: 1}}>
                <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle}>Welcome To PokeSearch</Text>
                    <Button
                        block
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.props.switchScreen("search")
                        }}>
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
        alignItems: 'center'
    },
    buttonStyle: {
        margin: 10
    },
    buttonText: {
        color: 'white'
    }
};

export default Landing;