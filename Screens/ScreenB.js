import React , {useState} from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';



export default function ScreenB ({route}) {
    
    const {itemName, itemId} = route.params;
    
    return(
      <View style={styles.body}>
        <Text style={styles.text1}> Screen B</Text>
        <Text style={styles.text1}> {itemName}</Text>
        <Text style={styles.text1}> {itemId} </Text>
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
        color: 'white'
      },


  })