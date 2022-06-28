import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

export default function App() {

  const [Items, setItems] =  useState([
    { Key: '1', name: 'Item 1'},
    { Key: '2', name: 'Item 2'},
    { Key: '3', name: 'Item 3'},
    { Key: '4', name: 'Item 4'},
    { Key: '5', name: 'Item 5'},
    { Key: '6', name: 'Item 6'},
    { Key: '7', name: 'Item 7'},
    { Key: '8', name: 'Item 8'},
    { Key: '9', name: 'Item 9'},
    { Key: '10', name: 'Item 11'},
    { Key: '11', name: 'Item 12'},
    { Key: '12', name: 'Item 13'},
    { Key: '13', name: 'Item 14'},
    { Key: '14', name: 'Item 15'},
  ])

  const [DATA,setData] = useState([
    {
      title :'Title 1',
      data: ['Item 1-1','Item 1-2'],
    },
  ])

  const [refreshing, setRefreshing] = useState(false)
  const [number,setNumber] = useState(2)
  const onRefresh = () =>{
    setRefreshing(true);
    setData([...DATA, {title: 'Title ' + number.toString(),data: ['Item '+ number.toString() +'-1','Item '+ number.toString() +'-2']}]);
    setNumber(number+1);
    setRefreshing(false);
  }
  return (
    <SectionList 
      style={styles.body}
      keyExtractor={(item,index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        <View style={styles.item2}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red']}></RefreshControl>
      }
    ></SectionList>

    // <FlatList
    // //numColumns={2}
    // //horizontal
    // keyExtractor={(item,index) => index.toString()}
    // data={Items}
    // renderItem={({item}) =>(
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
    // )}
    // refreshControl={
    //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red']}></RefreshControl>
    // }
    // 
    //</FlatList>


    // <View style={styles.body}>
    //   <ScrollView refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red']}></RefreshControl>
    //   }>
    //       {
    //         Items.map((object)=>{
    //           return(
    //             <View style={styles.item} key={object.Key}>
    //                 <Text style={styles.text}>{object.item}</Text>
    //             </View>
    //           )
    //         })
    //       }
    //   </ScrollView>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
   
    flexDirection: 'column',
    marginTop: 40,
  },
  text:{
    color: '#000000',
    fontSize:30,
    margin: 10,
  },
  item:{
    backgroundColor: '#4AE1FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor: '#00000'
  },
  item2:{
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#00000'
  },
});
