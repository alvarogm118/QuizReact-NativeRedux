import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
 
export default class MyButton extends React.Component {
  render() {
    return (
       <TouchableHighlight onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
  
const styles = StyleSheet.create({
	text: {
		padding: 20,
		margin: 20,
		backgroundColor: '#282c34',
		color: 'white',
		fontSize: 25,
		textAlign: 'center'
	}
})