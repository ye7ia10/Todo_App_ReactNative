import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './Screens/ScreenA';
import ScreenB from './Screens/ScreenB';
import Login from './Screens/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

/** import Provide and Store */
import { Provider } from 'react-redux';
import { Store } from './redux/store';


// const Tab = createBottomTabNavigator();

//const Tab = createMaterialBottomTabNavigator();


const Stack = createStackNavigator();



export default function App() {
 


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator  
          initialRouteName = "Login"
          screenOptions = {{
            headerTitleAlign : 'center',
            headerStyle:{
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name= "Screen A"
            component = {ScreenA}
          />

          <Stack.Screen
            name = "Login"
            component = {Login}
            options={
              {
                headerShown: false,
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
