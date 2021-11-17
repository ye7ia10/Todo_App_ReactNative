import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

/** import Provide and Store */
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Splash from './Screens/Splash';
import ToDo from './Screens/ToDo';
import Done from './Screens/Done';
import Task from './Screens/Task';

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs (){
  return(
    <Tab.Navigator
      screenOptions = {({route}) =>({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'ToDo') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;

          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
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
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight:'bold' },
      }}
    >
      <Tab.Screen name='ToDo' component={ToDo}/>
      <Tab.Screen name='Done' component={Done}/>

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();



export default function App() {
 


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator  
          initialRouteName = "Splash"
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
            name= "Splash"
            component= {Splash}
          />

          <Stack.Screen 
            name = "Home"
            component = {HomeTabs}
          />

          <Stack.Screen 
            name = "Task"
            component = {Task}
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
