import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    
    <View>
        <Text style={styles.text}>Platform : {Platform.OS}</Text>
      {
        Platform.OS=="android"?
        <View style={{backgroundColor:'red', height:100,width:100}}></View>
        :
        <View style={{backgroundColor:'green', height:100,width:100}}></View>

      }
      <Text style={styles.text}>Hello : {Platform.OS}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color:Platform.OS=='android'? "orange" : "blue" 
  },
  
});

export default App;
