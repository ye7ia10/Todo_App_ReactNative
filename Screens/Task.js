import React, {useState, useEffect} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import CusButton from '../utils/CustomButton'
import GlobalStyle from '../utils/GlobalStyle'

import { useSelector, useDispatch } from "react-redux";
//import the actions impelented
import { setTasks, setTaskId } from "../redux/actions";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Task({navigation}) {

    const{tasks, id} = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    const getTask = () => {
        const Task = tasks.find(task => task.id === id)
        if (Task) {
            setTitle(Task.title);
            setDesc(Task.desc);
        }
    }

    useEffect(() => {
       getTask()
    }, [])

    const onPressHandler = () => {
        if (title.length == 0){
            Alert.alert('Warning', 'Please Add Title For Your Task');
        } else {
            try {
                var task = {
                    title: title,
                    desc: desc,
                    id: id,
                }
                let newTasks = [];
                const index = tasks.findIndex(t => t.id === id);
                if (index > -1){
                    newTasks = [... tasks];
                    newTasks[index] = task;
                } else {
                    newTasks = [... tasks, task];
                }
                AsyncStorage.setItem('Tasks', JSON.stringify(newTasks)).then(
                    () => {
                        dispatch(setTasks(newTasks));
                        Alert.alert('Success', 'Task Is Saved Successfully');
                        navigation.goBack();
                    }
                )
            } catch (error) {
                console.log(error);
            }
        }
    }

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
            value={desc}
            placeholder = "Description"
            multiline
            onChangeText = {(value) => setDesc(value)}
            style = {[GlobalStyle.inp, styles.margin]}
            />

            <CusButton 
                handlePress = {onPressHandler}
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
