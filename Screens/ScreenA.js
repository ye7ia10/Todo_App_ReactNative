import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import CusButton from '../utils/CustomButton';


export default function ScreenA({navigation}) {

   
    const [name, setName] = useState('')
    const [age, setAge] = useState('')


    useEffect(() => {
       getData()  //if the second parameter if empty array function executed only once when open the page.
    }, [])
    const getData = () => {  //get data stored loclally
        try {
             AsyncStorage.getItem('userData').then(
                value => {
                    if (value != null){
                        
                        let user = JSON.parse(value)
                        setName(user.Name);
                        setAge(user.Age);
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }


    const deleteItem = async () => {
        try {
            //await AsyncStorage.removeItem('userName');
            await AsyncStorage.clear(); //clear all
            navigation.navigate('Login')
        } catch (error) {
            
        }
    }

    return (
      <View style = {styles.body}>
        <Text style={styles.text2}> welcome {name} ! </Text>
        <Text style={styles.text2}> Your Age Is  {age} ! </Text>

        <CusButton 
        
        title = "Log out"
        handlePress = {deleteItem}
        />
      </View>
    );
  }


  const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
        
      },

      text1: {
        textAlign:'center',
        alignContent: 'center',
        fontSize: 30,
        marginTop: 5,
        color:'#000'
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
        color: 'black',
        margin: 50
      },
  })