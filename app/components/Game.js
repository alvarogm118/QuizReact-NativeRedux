import React from 'react' ;
import Actionbar from './Actionbar' ;
import Content from './Content' ;
import {StyleSheet, View, Text} from 'react-native';

export default class Game extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'space-around', alignItems:'stretch'}}>
                <View style={{flex: 15}}>
                    {this.props.questions.length > 0 ?
                        <Content question={this.props.questions[this.props.currentQuestion]}
                                 currentQuestion={this.props.currentQuestion}
                                 onChangeQuestion={this.props.onChangeQuestion}
                                 onQuestionAnswer={this.props.onQuestionAnswer}
                        /> : <Text>Loading</Text>}
                </View>
                <View style={{flex: 3}}>
                    {this.props.questions.length > 0 ?
                        <Actionbar questions={this.props.questions}
                                   currentQuestion={this.props.currentQuestion}
                                   onChangeQuestion={this.props.onChangeQuestion}
                                   onSubmit={this.props.onSubmit}
                                   onInitQuestions={this.props.onInitQuestions}
                                   onReset={this.Reset.bind(this)}
                                   finished={this.props.finished}
                                   score={this.props.score}
                                   dispatch={this.props.dispatch}
                                   showPopup={this.props.showPopup}
                                   onBack={this.props.onBack}/> : <Text>''</Text>}
                </View>
            </View>
        );
    }

    async componentDidMount() {
        let newQuestions = await fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=21f4f873938d1a74d281');
        let questions = await newQuestions.json();
        this.props.onInitQuestions(questions);
    }

    Reset() {
        fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=21f4f873938d1a74d281')
            .then(res => res.json())
            .then(res => this.props.onReset(res));
    }
}