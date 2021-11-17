import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import CusButton from '../utils/CustomButton'
import GlobalStyle from '../utils/GlobalStyle'

export default function Task() {
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <View>
            <TextInput 
            value={title}
            placeholder = "Title"
            multiline
            style = {[GlobalStyle.inp, styles.margin]}
            onChangeText = {(value) => setTitle(value)}
            />
            <TextInput 
            placeholder = "Description"
            multiline
            onChangeText = {(value) => setDesc(value)}
            style = {[GlobalStyle.inp, styles.margin]}
            />

            <CusButton 
                title= "Save Task"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#ffffff',
    },
    margin: {
        margin:10
    }
})
