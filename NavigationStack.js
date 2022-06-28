import { useState } from 'react';
import { 
  Pressable,
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =  createStackNavigator();
function ScreenA({navigation}){
  const onPressHandler = () =>{
    navigation.navigate('Screen_B')
    //navigation.replace('Screen_B')
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
      onPress={onPressHandler}
      style={({pressed})=>({backgroundColor:pressed? '#ddd': '#0f0'})}
      >
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
  </View>
  )
}
function ScreenB({navigation}){
  const onPressHandler = () =>{
    navigation.navigate('Screen_A');
    //navigation.goBack();
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
      onPress={onPressHandler}
      style={({pressed})=>({backgroundColor:pressed? '#ddd': '#0f0'})}
      >
        <Text style={styles.text}>Go to Screen A</Text>
      </Pressable>
  </View>
  )
}

 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{header: () => null}} //quitar encabezado de todas las pantallas
      >
        <Stack.Screen 
        name='Screen_A' 
        component={ScreenA} 
        //options={{header: () => null}} //quitar encabezado de una pantalla
        ></Stack.Screen>
        <Stack.Screen name='Screen_B' component={ScreenB}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#000',
    fontSize:20,
    margin: 10,
    textAlign: 'center',
  },
});
export default App;

// npm install @react-navigation/native
//npm install @react-navigation/stack