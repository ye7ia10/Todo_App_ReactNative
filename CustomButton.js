import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";


const CusButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={props.handlePress}
        >

            <Text style={styles.text2}> {props.title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

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

export default CusButton;