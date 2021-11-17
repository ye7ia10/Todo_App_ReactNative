import React , {useState, useEffect} from "react";
import { View, StyleSheet, Text , Image, Alert} from "react-native";

export default function Splash({navigation}){


    useEffect(() => {
       setTimeout(()=>{
           navigation.replace('Home')
       }, 2000);  
     }, [])

     return(
         <View style={styles.body}>
             <Image 
                style = {styles.img}
                resizeMode= 'stretch'
                source = {require('../assets/checklist.png')}
             />
             <Text style={styles.text}>Todo App !</Text>

         </View>
     );
}

const styles = StyleSheet.create(

    {
        body:{
            flex:1,
            alignItems: "center",
            justifyContent:'center',
            backgroundColor: '#0080ff',
        },
        img:{
            width:150,
            height:150,
            margin: 10,
        },
        text:{
            textAlign:'center',
            fontSize: 30,
            color: '#ffffff'
        }
    }
)