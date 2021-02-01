import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

var MainValue;
var state = { number: 0 };
function  inputtake(text) {
    state.number=text;
  }
function P1(number) {
    alert(number);
    MainValue=this.state.number;
  }
function player1(props){
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Player 1</Text>
      <Text style={{ fontSize: 10 }} >Enter a number between 1 to 100</Text>
      <TextInput style={styles.textinput} keyboardType='numeric' onChangeText={(text) => this.inputtake(text)}   value = {this.state.number} />
      <Button title="Click Me" onPress={() => this.P1(this.state.number)} />
      <Button
      title="Go to Player 2"
      onPress={() => props.navigate('Player2')}
    />
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    backgroundColor: 'white',
    borderColor: 'black',
    margin: 10,
    width: 300,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',

  },
  Textstyle: {
    fontWeight: 'bold',
    fontSize: 30,
  }

};

//export default Player1;
export const Player1 = {
  player1,
  MainValue,
}