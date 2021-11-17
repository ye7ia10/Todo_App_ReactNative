import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from "react-redux";
//import the actions impelented
import { setTasks, setTaskId } from "../redux/actions";

export default function ToDo({navigation}) {
    
    const{tasks, id} = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const getTasks = () => {
        AsyncStorage.getItem('Tasks').then(
            tasks => {
                const parsedTasks = JSON.parse(tasks);
                if (parsedTasks && typeof parsedTasks === 'object'){
                    dispatch(setTasks(parsedTasks))
                } 
            }
        ).catch(err => console.log(err));
    }

    useEffect(() => {
        getTasks();
    }, [])


    return (
        <View style={styles.body}>
            <TouchableOpacity 
            
            onPress = {()=>{
                dispatch(setTaskId(tasks.length + 1))
                navigation.navigate('Task')}
            }
            style={styles.touch}>
                <FontAwesome5
                name={'plus'}
                size={20}
                color={'#fff'}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor: '#ffffff'
    },
    touch:{
        width:60,
        height: 60,
        backgroundColor: '#0080ff',
        borderRadius: 30,
        position: 'absolute',
        bottom:10,
        right:10,       
        justifyContent:'center',
        alignItems: 'center'

    }
})
