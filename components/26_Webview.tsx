import React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
      <WebView source={{uri:"https://legacy.reactjs.org/docs/hooks-effect.html"}}/> 
    </View>
  );
};


export default App;
