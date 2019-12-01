import React from 'react' ;
import {closePopup} from "../redux/actions";
import {StyleSheet, View, Button, Alert, AsyncStorage} from 'react-native';

export default class Actionbar extends React.Component {

    async _save(){
        try {

            var currentQ = JSON.stringify(this.props.questions);
            await AsyncStorage.setItem('@P2_2019_IWEB:quiz', currentQ);
            alert('Questions saved');
        } catch(error){alert(error)}
    }
    async _load(){
        try {
            var newQ = await AsyncStorage.getItem('@P2_2019_IWEB:quiz');
            if (newQ !== null) {
                var questions = JSON.parse(newQ);
                this.props.onInitQuestions(questions);
                alert('Questions loaded');
            } else {
                alert('No questions saved');
            }
        } catch(error){alert(error)}
    }
    async _remove(){
        try {
            await AsyncStorage.removeItem('@P2_2019_IWEB:quiz');
            alert('Questions removed');
        } catch(error){alert('Couldn´t remove questions');}
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'space-between'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Button color="#282c34" onPress={this.props.onBack} title="<- Go Back"/>
                    <Button color="#282c34" onPress={() => this.props.onChangeQuestion(this.props.currentQuestion - 1)}
                            disabled={this.props.currentQuestion < 1} title="Previous"/>
                    <Button color="#282c34" onPress={() => this.props.onChangeQuestion(this.props.currentQuestion + 1)}
                            disabled={this.props.currentQuestion > 8} title="Next"/>
                    <Button color="#282c34" onPress={this.props.onReset} title="Reset"/>
                    <Button color="#5D5655" onPress={this.props.onSubmit} title="Submit"/>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Button color="#282c34" onPress={this._save.bind(this)} title="Save"/>
                    <Button color="#282c34" onPress={this._load.bind(this)} title="Load"/>
                    <Button color="#282c34" onPress={this._remove.bind(this)} title="Remove"/>
                </View>
            </View>
        );
    }
    componentDidUpdate(){
        if(this.props.showPopup === true){
            Alert.alert('Congratulations!', "Your score is " + this.props.score +"/10 !");
            this.props.dispatch(closePopup())
        }
    }
}

