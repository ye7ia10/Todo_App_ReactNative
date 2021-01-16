import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO List</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        height:80,
        padding:40,
        backgroundColor:'red',
    },
    title:{
        fontSize:24,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }

})