import React from 'react';
import { View } from 'react-native';

import MyButton from './MyButton.js';
import Navbar from "./Navbar";

export default class IndexScreen extends React.Component {
  render() {
    return (
      <View style={{ flex:1, flexDirection: 'column', alignItems:'stretch', justifyContent:'flex-start', backgroundColor: '#64F0D2'}}>
        <View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center', backgroundColor: '#282c34'}}>
          <Navbar/>
        </View>
        <View style={{flex: 9, justifyContent:'center', alignSelf:'center'}}>
          <MyButton
              onPress={() => this.props.navigation.navigate('GameScreen')}
              text={"Start Quiz"}/>
        </View>
      </View>
    )
  }
}