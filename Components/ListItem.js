import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ListItem({item , pressHandler}){

    return (
        <TouchableOpacity onPress = { () => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item :{
        padding:20,
        marginTop:15,
        borderWidth:1,
        borderColor: 'red',
        borderRadius:10,
        borderStyle:'dashed',
        fontSize:16,
        fontWeight:'bold'
    }
})