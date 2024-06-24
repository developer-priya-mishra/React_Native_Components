import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExternalStyles from './style';

const App=()=>{
    const styles=StyleSheet.create({
        text:{
            backgroundColor:"lightblue",
            fontSize:40,
            color:'black',
            margin:20,
            padding:20  
        }
    });
    return(
        <View>
            <Text style={{backgroundColor:"blue",fontSize:30,color:'black'}}>Inline Style</Text>
            <Text style={styles.text}>Internal Style</Text>
            <Text style={ExternalStyles.text}>External Style</Text>
        </View>
    )
}

export default App;