import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View 
        , FlatList , ScrollView, RefreshControl, SectionList} from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
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
  }
  return (
    <View style={styles.body}>
    
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
    
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    textAlign:'center',
    alignContent: 'center',
    fontSize: 30
  }
  
});
