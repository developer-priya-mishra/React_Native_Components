import React from "react";
import { View,Text, TextInput, Button } from "react-native";
import Student from "./12_Student";

class App extends React.Component{
    fruit=()=>{
        console.warn("Apple");
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'red'}}>Class Component</Text>
                <TextInput placeholder="Enter your name"/>
                <Button title="Press Me" onPress={this.fruit}/>
            </View>
        )
    }
}

export default App;