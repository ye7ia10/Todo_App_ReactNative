import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, FlatList, Alert } from 'react-native'
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


    const deleteTask = (id) => {
        const FilteredTasks = tasks.filter(task => task.id !== id)
        AsyncStorage.setItem('Tasks', JSON.stringify(FilteredTasks)).then(
            () => {
                dispatch(setTasks(FilteredTasks));
                Alert.alert('Success', 'Task Removed Successfully')
            }
        ).catch(err => {console.log(err)})
    }
    return (
        <View style={styles.body}>
            <FlatList 
                data={tasks}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress = {() => {
                                dispatch(setTaskId(item.id))
                                navigation.navigate('Task')
                            }}
                            style={styles.item}
                            >
                            <View style={styles.item_row}>
                                <View style={styles.item_body}>
                                <Text style = {styles.title}>{item.title}</Text>
                                <Text style = {styles.subtitle}>{item.desc}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.delete}
                                    onPress = { () => {deleteTask(item.id)}}
                                >
                                <FontAwesome5 name={'trash'} size={25} color={'red'} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor = {(item, index) => index.toString()}
            />


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
        width:70,
        height: 70,
        backgroundColor: '#0080ff',
        borderRadius: 30,
        position: 'absolute',
        bottom:10,
        right:10,       
        justifyContent:'center',
        alignItems: 'center'

    },
    item:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        margin: 15,
        borderRadius: 20,
        elevation: 8,
        padding: 15,
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
        fontWeight:'bold',
        textAlign: 'center'
    },
    subtitle:{
          fontSize: 20,
          color: '#999999'
    },
    item_row:{
        flexDirection: 'row',
        alignItems:'center'
    },
    item_body:{
        flex:1
    },
    delete:{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
