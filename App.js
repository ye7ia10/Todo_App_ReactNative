import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View 
        , FlatList , ScrollView, 
        RefreshControl, SectionList, TouchableOpacity,Alert,Image,
        TextInput,
        ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  /* const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ])


  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]

  const [Refreshing , SetRefreshing] = useState(false)

  const onRefresh = () => {
    SetRefreshing(true)
    setItems([... Items, {name : 'Item Yehia'}])
    SetRefreshing(false)
  } */


  const [name, setName] = useState('')
  const [submit, setSubmit] = useState(false)

  const handlePress = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      
      Alert.alert('Warning', 'Name must be longer than 3' , [
        {text: 'ok'},
        {text: 'cancel'}
      ]);
      

      ToastAndroid.show('Name must be longer than 3' , ToastAndroid.SHORT);
    }
  } 

  return (
    <SafeAreaView style={styles.body}>
    
    
   {/*  
        <Text style= {styles.text1} >My Flat List</Text>
        <FlatList
         keyExtractor={(item, index) => index.toString()}
         data={Items}
         renderItem={({ item }) => (
         <View style={styles.item}>
           <Text style={styles.text}>{item.name}</Text>
         </View>
       )}
       refreshControl={
         <RefreshControl
         refreshing={Refreshing}
           onRefresh={onRefresh}
           colors={['#ff00ff']}
         />
       }
     /> */}
{/* 
     <Text style={styles.text1} >Section List</Text>
     <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />

    */}



     <Text style={styles.text1}>Enter Your name : </Text>
     <TextInput 
        placeholder =  'e.g. John Doe'
        textAlign = 'center'
        style = {styles.input}
        onChangeText = { (val) => { setName(val)}}
     />

     <TouchableOpacity
     
      style = {styles.btn}
      onPress = {handlePress}
     
     >

     <Text style={styles.text2}> {submit ? 'Clear' : 'Register'}</Text>

     </TouchableOpacity>

    {
      submit ? 
      <View style={styles.body}>    
        <Text style={styles.item}> Entered name is {name} </Text>
        <Image 
        style = {styles.img}
        resizeMode = 'stretch'
        source={ require('./assets/done.png')} />
      </View>

      :
      <Image 
      style = {styles.img}
      resizeMode = 'stretch'
      source={ require('./assets/error.png')} />
    }
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:  {
    height: 200,
    width: 200,
    justifyContent: 'center',
    margin: 10
  },


  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    padding: 20,
    fontSize: 20,
    width: '80%',
    backgroundColor: '#4ae1fa',
    textAlign: 'center'
  },

  text1: {
    textAlign:'center',
    alignContent: 'center',
    fontSize: 30,
    marginTop: 5,
    color:'#000'
  }, 
  input: {
    width: '80%',
    borderColor : '#000',
    borderWidth: 1,
    margin: 15,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
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
  
});
