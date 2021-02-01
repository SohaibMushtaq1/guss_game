// In App.js in a new project

import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var MainValue = 0;
var count = 0;

const Stack = createStackNavigator();




function SecondScreen({ navigation }) {
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);


  /*const greaterthan=(inp,rand)=>{
    if(inp > rand){
      count++;
        alert("Value is Great");
        let update=rand;
        rand = Math.floor(Math.random()*(inp-update+1)+update);
        
        setRandom(rand);
  
    }else if(inp==rand){
      alert("Game over and the count is "+count);
      navigation.navigate('Player1');
    }else{
      alert("You press the wrong button");
      count++;
    }
  
  }
  const smallerthan=(inp,rand)=>{
    if(inp < rand){
      alert("value is less");
      let update=rand;
      rand = Math.floor(Math.random()*(update-inp +1)+inp);
      setRandom(rand);
      count++;
    }else if(inp==rand){
      alert("Game over and the count is "+count);
      navigation.navigate('Player1');
    }else{
      count++;
      alert("You press the wrong button");
    }
  }
*/
  if (MainValue == 0) {
    count = 0;
    navigation.navigate('Player1');
  }

  var generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  
  const condition = (inp, rand, message) => {
    if (inp == rand) {
      alert("Game over and the count is " + count);
      navigation.navigate('Player1');
    }
    else if (message == "Smaller" && inp < rand) {
      // console.log("Smaller: Before random number is " + random);
      setMax(random);
      // console.log("Smaller: Random number generated is " + rand);
      // setMax(random);
      rand = generateRandomNumber(max, min);
      setRandom(rand);

      count++;
    } else if (message == "Greater" && inp > rand) {
      // console.log("Greater: Before random number is " + random);
      setMin(random);
      // rand = generateRandomNumber(min, max);
      // setRandom(rand);
      // console.log("Greater: Random number generated is " + rand);
      // setMin(random);


      // console.log(min);
      // console.log(max);
      rand = generateRandomNumber(max, min);
      setRandom(rand);
      count++;
    } else {
      alert("You press the wrong button");
      count++;
    }
    
    console.log("Windows size");
    console.log(min+"  ...   "+max);
  }
  return (
    <View style={styles.container2} >

      <TouchableOpacity
        style={styles.customBtnBG} onPress={() => condition(MainValue, random, "Greater")}
      >
        <Text style={styles.customBtnText}>Greater than</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30 }}>{random}</Text>

      <TouchableOpacity
        style={styles.customBtnBG} onPress={() => condition(MainValue, random, "Smaller")}
      >
        <Text style={styles.customBtnText}>Lessthan</Text>
      </TouchableOpacity>

    </View>
  );
}

//player 1
var check;
function HomeScreen({ navigation }) {
  const [num, setNum] = useState(0);
  const [Value, setValue] = useState(true);

  const P1 = (number) => {
    if (number > 100) {
      alert("Please enter value smaller than or equal to 100");
      setValue(true);
    }
    if (number < 1) {
      alert("Please enter value smaller than or equal to 100");
      setValue(true);
    }
    if (number >= 1 && number <= 100) {
      MainValue = number;
      setValue(false);
      alert(number);
      navigation.navigate('Player2');

    }
  }
  const gValue = (num) => {
    if (num <= 100 || num >= 1) {
      setValue(false);
    }
    if (num > 100 || num < 1) {
      setValue(true);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Player 1</Text>
      <Text style={{ fontSize: 10 }} >Enter a number between 1 to 100</Text>
      <TextInput style={styles.textinput} keyboardType='numeric' placeholder="Enter a value" onChangeText={(text) => { setNum(text), gValue(text) }} />
      <Button

        disabled={Value}
        title="Go to Player 2"
        onPress={() => P1(num)}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Player1">
        <Stack.Screen name="Player1" component={HomeScreen} />
        <Stack.Screen name="Player2" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    marginLeft: 50

  }
  ,
  textinput: {
    backgroundColor: 'white',
    borderColor: 'black',
    margin: 10,
    width: 300,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'

  },
  Textstyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  customBtnText: {
    fontSize: 10,
    fontWeight: '400',
    color: "#fff",
  },
  customBtnBG: {
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  Btnstyle: {
    height: 100
  }
};

export default App;