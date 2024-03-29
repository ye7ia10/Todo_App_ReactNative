import React from "react";

import { TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";


const CusButton = (props) => {
    return (
        <Pressable
            style={styles.btn}
            onPress={props.handlePress}
        >

            <Text style={styles.text2}> {props.title}</Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({

    btn:{
        backgroundColor: '#1eb900',
        
        padding:10,
        borderWidth:1,
        borderRadius:15,
        margin: 10
      },
    
      text2: {
        textAlign:'center',
        alignContent: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight:'bold'
      },
})

export default CusButton;