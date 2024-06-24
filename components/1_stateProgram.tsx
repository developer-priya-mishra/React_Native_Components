import React, { useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const App=()=>{
  const [name,setName]=useState("Anil");

  let data="abc";

  function testName() {
    setName("Priya");
    data="PQR"
  }
  return(
    <View>
      <Text style={{fontSize :30}}>{name}</Text>
      <Text style={{fontSize :30}}>{data}</Text>

      <Button title='Update Name' onPress={testName}></Button>
    </View>
  )
}

export default App;
