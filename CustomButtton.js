import React from "react";
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const BorisButton = (props) =>{
  return(
    <Pressable 
    style={({pressed}) =>[
      {backgroundColor: pressed? '#ddd': props.color},
      styles.button,
      {...props.style}]} 
    onPress={props.onPressFunction}>
    <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
    
}

const styles = StyleSheet.create({
    button:{
        marginTop: 10,
        width:100,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#fff',
      },
      text:{
        color: '#fff',
        fontSize:20,
        margin: 10,
        textAlign: 'center',
      },
})
export default BorisButton;