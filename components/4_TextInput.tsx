import React, { useState } from "react";
import { View,Text, TextInput, StyleSheet, Button } from "react-native";

const App=()=>{
    const [name,setName]=useState("");

    
    return(
        <View>
            <Text style={{fontSize:30,margin:10}}>Handle TextInput</Text>
            <Text style={{fontSize:25,margin:10}}>Your name is : {name} </Text>
            <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={(text)=>setName(text)}
            style={styles.textBox}
            />
            <View style={{margin:8}}>
            <Button title="Clear input value" onPress={()=>setName("")}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    textBox:{
        fontSize:18,
        color:'blue',
        borderWidth:2,
        borderColor:'blue',
        margin:10
    }
})


export default App;