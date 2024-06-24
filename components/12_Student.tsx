import React from "react";
import { View,Text, TextInput, Button } from "react-native";

interface Studentprops{
    name:string
}

class Student extends React.Component<Studentprops>{
    
    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'green'}}>Student Component : {this.props.name}</Text>
            </View>
        )
    }
}

export default Student;
