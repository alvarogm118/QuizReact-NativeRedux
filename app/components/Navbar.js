import React from 'react' ;
import { StyleSheet, View, Text } from 'react-native';

export default class Navbar extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'white', fontSize: 25, fontWeight:'bold'}} >QUIZ GAME</Text>
            </View>
        );
    }
}

