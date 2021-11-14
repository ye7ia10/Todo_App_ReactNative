import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()

function ScreenA({navigation}) {

  const onPressBtn = () => {
    navigation.navigate('Screen B');
  }
  return (
    <View style = {styles.body}>
      <Text style={styles.text1}>Screen A</Text>

      <Pressable 
      onPress = {onPressBtn}
      
      style={styles.btn}>
        <Text style={styles.text2}>Go To Next Screen</Text>
      </Pressable>
    </View>
  );
}


function ScreenB () {
  return(
    <View style={styles.body}>
      <Text style={styles.text1}> Screen B</Text>
    </View>
  );
}

export default function App() {
 


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= "Screen A"
          component = {ScreenA}
        />

      <Stack.Screen 
          name= "Screen B"
          component = {ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:  {
    height: 200,
    width: 200,
    justifyContent: 'center',
    margin: 10
  },


  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
    
  },
  item: {
    margin: 10,
    padding: 20,
    fontSize: 20,
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center',
    color:'#fff'
  },

  text1: {
    textAlign:'center',
    alignContent: 'center',
    fontSize: 30,
    marginTop: 5,
    color:'#000'
  }, 
  input: {
    width: '80%',
    borderColor : '#000',
    borderWidth: 1,
    margin: 15,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  btn:{
    backgroundColor: 'green',
    width:'60%',
    padding:10,
    borderWidth:1,
    borderRadius:15,
  },

  text2: {
    textAlign:'center',
    alignContent: 'center',
    fontSize: 30,
    color: 'white'
  },
  
});
