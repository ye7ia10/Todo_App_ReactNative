import { StatusBar } from "expo-status-bar";
import React , {useState, useEffect} from "react";
import { View, StyleSheet, Text , Image, Alert} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CusButton from "../utils/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

/** import useSelector and UseDispatch
 * UseSelector to select the states needed here from its reducer
 * UseDispatch to call the actions
 */

import { useSelector, useDispatch } from "react-redux";
//import the actions impelented
import { setName , setAge } from "../redux/actions";





export default function Login({navigation}){


    const{name, age} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();



   /*  const [name, setName] = useState('')
    const [age, setAge] = useState('')
     */

    /** check if user already logged in before */

    useEffect(() => {
        getData()  //if the second parameter if empty array function executed only once when open the page.
     }, [])
     const getData = () => {  //get data stored loclally
         try {
              AsyncStorage.getItem('userData').then(
                 value => {
                     if (value != null){
                         navigation.navigate('Screen A');
                     }
                 }
             )
         } catch (error) {
             console.log(error)
         }
     }

     /** End  */

    const pressHandle = async () => {
        if (name.length == 0) {
            Alert.alert('warning', 'Enter Your Name')
        } else {
            try {
                //Redux 
                dispatch(setName(name))
                dispatch(setAge(age))

                /** for objects */
                var user = {
                    Name : name,
                    Age : age        
                }
                await AsyncStorage.setItem('userData', JSON.stringify(user));
                /** end */
                // for one val
                // await AsyncStorage.setItem('userName', name);
                navigation.navigate('Screen A');
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <View style={styles.body}>
            
                       <Image 
            style = {styles.img}
            source= {require('../assets/logo.png')}
            resizeMode='stretch'
            />
            <Text style={styles.text1}>Login Page !</Text>

            <View style={styles.view2}>
            <TextInput
                placeholder = "Enter Your Name"
                onChangeText = {(value) => {dispatch(setName(value))}}
                style={styles.inp}
            />
            <TextInput
                placeholder = "Enter Your Age"
                onChangeText = {(value) => {dispatch(setAge(parseInt(value)))}}
                style={styles.inp}
            />
            <CusButton 
                title = "Login"
                handlePress = {pressHandle}
            />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: "center",
        backgroundColor: '#0080ff'
    },
    img:{
        width:100,
        height:100,
        margin: 10,
    },
    text1:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
    },
    inp:{
        width:'80%',
        borderWidth:1,
        borderRadius:15,
        backgroundColor:'#fff',
        padding:15,
        margin:15,
        fontSize:20,
    },
    view2:{
        margin:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        
    }
})