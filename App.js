import React , {useState} from 'react';
import { StyleSheet, Text, View , Button , TextInput, FlatList, Alert} from 'react-native';
import Header from './Components/header'
import ListItem from './Components/ListItem'
import AddItem from './Components/addItem'


export default function App() {
  const[todos, setTodos] = useState([
    {text:"Wake Up", key:'1'},
    {text:"Drink Coffee", key:'2'},
    {text:"Coding", key:'3'}
  ])

  const PressHandler = (key) => {
    return setTodos( (prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    } )
  }

  const AddNewItem = (item) => {
     if (item.length > 3) {

      setTodos ( (prevTodos) => {
        return [
          {text : item , key : Math.random().toString() }
          ,...prevTodos
        ]
      } )

     } else {
      Alert.alert('OOPS!' , 'Your Todo should be more than 3 chars.')
     }
  }
  return (
    
    <View style={styles.container}>
      <Header />
      <View style = {styles.content}>
        <AddItem submitNew = {AddNewItem}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <ListItem item = {item} pressHandler={PressHandler}/>
            )}
          />
        </View>

      </View>
    </View>
  );
}
// React Native Button does not support styles external.
// Can create many states , can takes any variable or objects
// inhertince does not work in React styles except for text inside text.
const styles = StyleSheet.create({   // for view as Android or IOS don't support CSS.
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  },

  
});
