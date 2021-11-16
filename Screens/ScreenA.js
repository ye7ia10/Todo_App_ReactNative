import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Pressable, FlatList} from 'react-native';
import CusButton from '../utils/CustomButton';


/** import useSelector and UseDispatch
 * UseSelector to select the states needed here from its reducer
 * UseDispatch to call the actions
 */

 import { useSelector, useDispatch } from "react-redux";
 //import the actions impelented
 import { setName , setAge, increaseAge, getCities } from "../redux/actions";



export default function ScreenA({navigation}) {

   
    /* const [name, setName] = useState('')
    const [age, setAge] = useState('')
    */

    const{name, age, cities} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    useEffect(() => {
       getData();  //if the second parameter if empty array function executed only once when open the page.
       dispatch(getCities());
    }, [])
    const getData = () => {  //get data stored loclally
        try {
             AsyncStorage.getItem('userData').then(
                value => {
                    if (value != null){
                        
                        let user = JSON.parse(value)
                        dispatch(setName(user.Name));
                        dispatch(setAge(user.Age));
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
        {/* <Text style={styles.text2}> Your Age Is  {age} ! </Text>

        <CusButton 
        
        title = "Log out"
        handlePress = {deleteItem}
        />

        <CusButton 
            title = "Increase Age"
            handlePress = {() => dispatch(increaseAge())}
            /> */}

            <Text style={styles.text2}>Cities from API : </Text>
            <FlatList 
                data={cities}
                renderItem= {({item}) => (
                    <View style = {styles.item}>
                        <Text style={styles.title}>{item.country}</Text>
                        <Text style={styles.subtitle}>{item.city}</Text>
                    </View>
                )}
                keyExtractor = {(item, index) => index.toString()}

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
      item:{
          backgroundColor: '#ffffff',
          width: 300,
          borderWidth: 1,
          borderColor: '#000',
          margin: 15,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
      },
      title:{
          fontSize: 30,
          margin:10,
          fontWeight:'bold'
      },
      subtitle:{
            fontSize: 20,
            color: '#999999'
      }
  })