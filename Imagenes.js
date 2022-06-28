import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Modal,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';

export default function App() {
  const [name,setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onHandlePress = () =>{
    if(name.length>3){
      setSubmitted(true)
    }else{
      setSubmitted(false)
    }
  }
  return (
    <ImageBackground 
    source={require('./assets/Fondo.jpg')}
    resizeMode='stretch'
    style={styles.body}>
        <Text style={styles.text}>Please Write your name </Text>
        <TextInput placeholder='Boris Avila' onChangeText={(value)=>setName(value)} style={styles.input}></TextInput>
        <Pressable style={styles.button} onPress={onHandlePress}>
        <Text style={styles.text}>Submit</Text>
        </Pressable>

        {
          submitted?
          <View style={styles.body}>
                <Text style={styles.text}>you are registered as {name}</Text>
                <Image 
                style={styles.image}
                source={require('./assets/done.jpg')} //source={uri:('https://direcion/imagen')} imagen de la web
                resizeMode='stretch'
                />
          </View>
          :
          <View style={styles.body}>
                <Text style={styles.text}>The name must be longer than 3 characters</Text>
                <Image 
                style={styles.image}
                source={require('./assets/error.png')}
                resizeMode='stretch'
                />
          </View>
          
        }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,

  },
  text:{
    color: '#fff',
    fontSize:20,
    margin: 10,
    textAlign: 'center',
  },
  input:{
    width:200,
    borderWidth:1,
    borderRadius:5,
    backgroundColor: '#fff',
    borderColor: '#555',
    textAlign: 'center',
  },
  button:{
    marginTop: 10,
    width:100,
    backgroundColor:'#555',
    borderWidth:2,
    borderColor:'#fff',
  },
  image:{
    width:100,
    height:100,
    margin:10,
  }
});