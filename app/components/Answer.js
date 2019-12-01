import React from 'react' ;
import {StyleSheet, View, TextInput} from 'react-native';

export default class Answer extends React.Component {
    render() {
        return (
            <View>
                <TextInput
                       style={{backgroundColor:'white', padding: 4, borderWidth: 1}}
                       placeholder="Type your answer"
                       onChangeText={(text) => this.props.onQuestionAnswer(text)}/>
            </View>
        );
    }
}