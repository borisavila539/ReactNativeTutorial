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
} from 'react-native';

export default function App() {

  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [deposit, setDeposit] = useState(0.00);
  const [password,setPassword] = useState('')
  const onButtonPress = () => {
    setName('');
    setAge(0);
    setEmail('');
    setPhoneNumber('');
    setDeposit(0.00);
    setPassword('')
  }
  const onPressInput = () =>{
    
  }
  return (
    <ScrollView>
    <View style={styles.body}>
      
        <Text style={styles.text}>Please write your name:</Text>
        <TextInput 
        //multiline para poner varias lineas en el input
        style={styles.input}
        placeholder='Boris Avila'
        onChangeText={(value)=>setName(value)}
        keyboardType='default' //Tipos de teclado=  https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/
        ></TextInput>
      
        <Text style={styles.text}>Please write your age:</Text>
        <TextInput
        style={styles.input}
        placeholder='99'
        onChangeText={(value)=>setAge(value)}
        keyboardType='numeric'
        ></TextInput>

        <Text style={styles.text}>Please write your email:</Text>
        <TextInput
        style={styles.input}
        placeholder='example@email.com'
        onChangeText={(value)=>setEmail(value)}
        keyboardType='email-address'
        ></TextInput>

        <Text style={styles.text}>Please write your Phone Number:</Text>
        <TextInput
        style={styles.input}
        placeholder='9999-9999'
        onChangeText={(value)=>setPhoneNumber(value)}
        keyboardType='phone-pad'
        maxLength={8}//limitar el numero de caracteres
        //editable={false}//para no editar el dato
        ></TextInput>

        <Text style={styles.text}>Please write your Deposit:</Text>
        <TextInput
        style={styles.input}
        placeholder='99.99'
        onChangeText={(value)=>setDeposit(value)}
        keyboardType='decimal-pad'
        ></TextInput>

        <Text style={styles.text}>Please write your password:</Text>
        <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(value)=>setPassword(value)}
        keyboardType='default'
        secureTextEntry={true}
        //underlineColorAndroid='red' poner linea en ves del cuadro
        //selectionColor='red' color del puntero
        ></TextInput>

        <View style={styles.view1}>
          <Text style={styles.text2}>Name: {name}</Text>
          <Text style={styles.text2}>Age: {age}</Text>
          <Text style={styles.text2}>Email: {email}</Text>
          <Text style={styles.text2}>Phone: {phoneNumber}</Text>
          <Text style={styles.text2}>Deposit: {deposit}</Text>
          <Text style={styles.text2}>Password: {password}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.text2}>Name: {name}</Text>
          <Text style={styles.text2}>Age: {age}</Text>
          <Text style={styles.text2}>Email: {email}</Text>
          <Text style={styles.text2}>Phone: {phoneNumber}</Text>
          <Text style={styles.text2}>Deposit: {deposit}</Text>
          <Text style={styles.text2}>Password: {password}</Text>
        </View>

        <View style={styles.view1}>
          <Text style={styles.text2}>Name: {name}</Text>
          <Text style={styles.text2}>Age: {age}</Text>
          <Text style={styles.text2}>Email: {email}</Text>
          <Text style={styles.text2}>Phone: {phoneNumber}</Text>
          <Text style={styles.text2}>Deposit: {deposit}</Text>
          <Text style={styles.text2}>Password: {password}</Text>
        </View>

        <View style={styles.button}>
          <Button title='Enviar' onPress={onButtonPress}></Button>
        </View>
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
  text2:{
    color: '#000000',
    fontSize:15,
  },
  input:{
    width:200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  view1:{
    width:'60%',
    borderWidth:1,
    borderColor: '#00ffff',
    marginTop: 10,
    alignItems: 'flex-start',
    alignContent: 'center',
    paddingBottom:10,
    padding: 10,
  },
  button:{
    marginTop: 10,
    width:'90%',
  },
  scroll:{
    width:'100%',
    borderWidth:2,
    borderColor: '#000'
  }
});
