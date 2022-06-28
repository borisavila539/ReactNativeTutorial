import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
} from 'react-native';

export default function App() {

  return (
    <View style={styles.body}>
      <View style={styles.line1}>
          <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View>
      </View>
      <View style={styles.line2}>
          <View style={styles.view4}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text}>5</Text>
          </View>
      </View>
      <View style={styles.line3}>
      <View style={styles.view6}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
          </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch', 
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop:40,
  },
  line1:{
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line2:{
    flex:2,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  line3:{
    flex:8,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color: '#000000',
    fontSize:30,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
 view1:{
  flex:1,
  backgroundColor:'#00ffff',
  alignItems: 'center',
  justifyContent: 'center',
},
view2:{
  flex:2,
  backgroundColor:'#ff00ff',
  alignItems: 'center',
  justifyContent: 'center',
},
view3:{
  flex:3,
  backgroundColor:'#ffff00',
  alignItems: 'center',
  justifyContent: 'center',
},
view4:{
  flex:1,
  backgroundColor:'red',
  alignItems: 'center',
  justifyContent: 'center',
},
view5:{
  flex:1,
  backgroundColor:'green',
  alignItems: 'center',
  justifyContent: 'center',
},
view6:{
  flex:1,
  backgroundColor:'#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
},
view7:{
  flex:1,
  backgroundColor:'blue',
  alignItems: 'center',
  justifyContent: 'center',
},
});
