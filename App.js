import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './Screens/ScreenA';
import ScreenB from './Screens/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const Tab = createBottomTabNavigator();





export default function App() {
 


  return (
    <NavigationContainer>
      <Tab.Navigator  
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Screen A') {
            iconName = 'autoprefixer';
            size = focused ? 25 : 20;
            
          } else if (route.name === 'Screen B') {
            iconName = 'btc';
            size = focused ? 25 : 20;
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
            />
          )
        }
      })}


      tabBarOptions={{
        activeTintColor: '#f0f',
        inactiveTintColor: '#555',
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#999',
        showLabel: true,
        labelStyle: { fontSize: 14 },
        showIcon: true,
      }}
      
      
      >
        <Tab.Screen 
          name= "Screen A"
          component = {ScreenA}
        />

      <Tab.Screen 
          name= "Screen B"
          component = {ScreenB}
        />
      </Tab.Navigator>
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
