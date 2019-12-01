import React from 'react' ;
import {StyleSheet, Text} from 'react-native';

export default class Question extends React.Component {
    render() {
        return (<Text style={{fontSize: 17}}> {this.props.pregunta} </Text>);
    }
}