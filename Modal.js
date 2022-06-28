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
} from 'react-native';

export default function App() {
  const [name,setName] = useState('')
  const [submitted,setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const onPressHandler = () =>{
    if(name.length>3){
      setSubmitted(!submitted)
    }else{
      setShowWarning(true)
    }
    
  }
  return (
    <View style={styles.body}>
      <Modal 
      visible={showWarning} 
      onRequestClose={()=>setShowWarning(false)}
      transparent
      animationType='slide' // 'fade' o 'slide'
      //hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={()=> setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color:'#fff'}}
              >
                  <Text style={styles.text}>OK</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
          <Text style={styles.text} >
              Please write your name
          </Text>
          <TextInput 
            style={styles.input} 
            placeholder='Boris Avila' 
            onChangeText={(value) => setName(value)}></TextInput>
          <Button 
          title={submitted?'clear':'Submit'} 
          onPress={onPressHandler}
          color='#00f'
          ></Button>
          {
            submitted?
              <Text style={styles.text} >
                You are login as {name}
              </Text>
            :
              <Text style={styles.text} >
                You are not registered
              </Text>
          }
    </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
  },
  text:{
    color: '#000000',
    fontSize:15,
    margin: 10,
    textAlign: 'center',
  },
  input:{
    width:200,
    borderWidth:1,
    borderColor:'#555',
    textAlign: 'center',
    fontSize:20,
    marginBottom:10,
  },
  centered_view:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal:{
    width:300,
    height:300,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title:{
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body:{
    height:200,
    justifyContent: 'center',

  },
  warning_button:{
    width: '100%',
    height: 40,
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});