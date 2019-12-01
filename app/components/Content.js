import React from 'react' ;
import Question from './Question' ;
import Answer from './Answer' ;
import {StyleSheet, View, Text, Image, Picker} from 'react-native';

export default class Content extends React.Component {
    render() {
        return (
            <View style={{flex:1, flexDirection: 'column', justifyContent:'space-around', alignItems:'center'}}>
                <View style={{flex: 7, justifyContent:'center'}}>
                    {this.props.question.attachment === null ? null :
                        <Image style={{width: 270, height: 160}} source={{uri: this.props.question.attachment.url}}/>}
                </View>
                <Text style={{flex: 2, fontSize: 26, fontWeight:'bold'}}>Question {this.props.currentQuestion + 1}:</Text>
                <View style={{flex: 1, justifyContent:'center'}}>
                    <Question pregunta={this.props.question.question}/>
                </View>
                <View style={{flex: 1, justifyContent:'flex-start'}}>
                    <Answer
                        onQuestionAnswer={this.props.onQuestionAnswer}
                        userAnswer={this.props.question.userAnswer}/>
                </View>
                <View style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 15, fontWeight:'bold'}}>Tips:</Text>
                    {this.props.question.tips.map((tip, i) => <Text style={{fontSize: 13}} key={i}>{tip}</Text>)}
                </View>
                <View style={{flex: 2, flexDirection:'row', alignItems:'center'}}>
                    <Image style={{width: 40, height: 40}} source={{uri: this.props.question.author.photo.url}}/>
                    <Text style={{marginLeft: 10}}>Created by: {this.props.question.author.username}</Text>
                </View>
            </View>
        );
    }
}

