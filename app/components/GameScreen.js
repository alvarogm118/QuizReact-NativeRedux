import React from 'react';
import {connect} from 'react-redux' ;
import Game from "./Game";
import Navbar from "./Navbar";
import {changeQuestion, initQuestions, questionAnswer, reset, submit} from './../redux/actions';
import { StyleSheet, View } from 'react-native';

class GameScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={{flex:1, flexDirection: 'column', justifyContent:'space-around', alignItems:'stretch', backgroundColor: '#64F0D2'}}>
                <View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center', backgroundColor: '#282c34'}}>
                    <Navbar/>
                </View>
                <View style={{flex:9}}>
                    <Game
                        questions={this.props.questions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={(newId) => {
                            this.props.dispatch(changeQuestion(newId))
                        }}
                        onInitQuestions={(newQ) => {
                            this.props.dispatch(initQuestions(newQ))
                        }}
                        onReset={(newQ) => {
                            this.props.dispatch(reset(newQ))
                        }}
                        onSubmit={() => {
                            this.props.dispatch(submit(this.props.questions))
                        }}
                        onQuestionAnswer={(answer) => {
                            this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                        }}
                        dispatch={this.props.dispatch}
                        finished={this.props.finished}
                        score={this.props.score}
                        showPopup={this.props.showPopup}
                        onBack={() => this.props.navigation.goBack()}/>
                </View>
            </View>
        );
    }
    }


function mapStateToProps(state) {
    return {
        ...state
    };
}
export default connect(mapStateToProps)(GameScreen);
