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
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

export default function App() {

  const [name,setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
 
  const onPressHandler = () =>{
    {/* mostrada mensaje de error como modal grande
      if(name.length>3){
        setSubmitted(!submitted);
    }else{
      Alert.alert('Warning','The name must be longer than 3 characters',[
        {
          text:'Do not show Again', 
          onPress: () =>console.warn('Do not show again Pressed')
        },
        {
          text:'Cancel', 
          onPress: ()=>console.warn('Cancel Pressed')
        },
        {
          text:'OK', 
          onPress: ()=>console.warn('Ok Pressed')
        },
      ],
      {
        cancelable:true ,//Cancelar la alerta tocando fuera
        onDismiss: ()=> console.warn('Alert Dismissed')
      }
      )
    }
*/}
  {/* para mostrar un mensaje de alerta abajo de la pantalla
    ToastAndroid.show(
      'The name must be longer than 3 characters',
      ToastAndroid.LONG //LONG o SHORT
    )
    */}
    {
      if(name.length>3){
        setSubmitted(!submitted);
    }else{
      ToastAndroid.showWithGravity(
        'The name must be longer than 3 characters',
        ToastAndroid.LONG, //LONG o SHORT
        ToastAndroid.CENTER, // 
      )}
    }
  }
  return (
    <ScrollView>
        <View style={styles.body}>
          <Text style={styles.text} >
              Please write your name
          </Text>
          <TextInput 
            style={styles.input} 
            placeholder='Boris Avila' 
            onChangeText={(value) => setName(value)}></TextInput>

            {/*Tipo de Boton 1*/}
          <Button 
          title={submitted?'clear':'Submit'} 
          onPress={onPressHandler}
          color='#00f'
          ></Button>

          {/*Tipo de Boton 2*/}
          <TouchableOpacity 
          onPress={onPressHandler} 
          style={styles.button}
          activeOpacity={0.5}
          >
            <Text style={styles.text}>
            {submitted?'clear':'Submit'}
            </Text>
          </TouchableOpacity>

          {/*Tipo de Boton 3 cambia de color*/}
          <TouchableHighlight 
          onPress={onPressHandler} 
          style={styles.button}
          underlayColor='#dddddd'
          >
            <Text style={styles.text}>
            {submitted?'clear':'Submit'}
            </Text>
          </TouchableHighlight>

          {/*Tipo de Boton 4*/}
          <TouchableWithoutFeedback 
          onPress={onPressHandler} 
          >
            <View style={styles.button}>
              <Text style={styles.text}>
                {submitted?'clear':'Submit'}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          {/*Tipo de Boton 5*/}
          <Pressable 
          //mantener apretado el boton para hacer la accion
          //delayLongPress={2000}
          //onLongPress={onPressHandler}
          onPress={onPressHandler} 
          hitSlop={{ top:10, bottom:10, left: 10, right: 10}}
          android_ripple={{color:'#00f'}} //Solo funciona en android
          style={({pressed})=>[
            {backgroundColor: pressed?'#dddddd':'#00ff00'},
            styles.button2]}
          >
            <Text style={styles.text}>
              {submitted?'clear':'Submit'}
            </Text>
          </Pressable>

          {submitted?
          <Text style={styles.text}>Your are registred as {name}</Text>
          :
          <Text style={styles.text}>Your are not registred</Text>
          }
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'center',
    marginTop: 40,
  },
  text:{
    color: '#000000',
    fontSize:20,
    margin: 10,
  },
  input:{
    width:200,
    borderWidth:1,
    borderColor:'#555',
    textAlign: 'center',
    fontSize:20,
    marginBottom:10,
  },
  button:{
    width:150,
    height:50,
    backgroundColor:'#00ff00',
    alignItems: 'center',
    marginTop:10,
  },
  button2:{
    width:150,
    height:50,
    alignItems: 'center',
    marginTop:10,
  },
});
