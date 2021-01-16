import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,TextInput , Button} from 'react-native';

export default function AddItem ({submitNew}){

    const [todo, setText] = useState('')
    const changeText = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput 
                onChangeText={changeText}
                style = {styles.input}
                placeholder='New Todo ...'
            />
            <Button onPress = {()=> submitNew(todo)} title='Add' color='red'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        padding:8,
        marginBottom:10,
        borderWidth:1,
        fontSize:16,
        borderColor:'#ddd'
    }

})