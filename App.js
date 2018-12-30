import React from 'react';
import {Platform, View} from 'react-native';
import Landing from "./src/Landing";
import Search from "./src/Search";

export default class App extends React.Component {
    state = {
        currentScreen: "search"
    };

    switchScreen = currentScreen => {
        this.setState({currentScreen})
    };

    renderScreen = () => {
        switch (this.state.currentScreen) {
            case "landing":
                return <Landing switchScreen={this.switchScreen}/>;
            case "search":
                return <Search/>;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderScreen()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 24 : 0
    }
};