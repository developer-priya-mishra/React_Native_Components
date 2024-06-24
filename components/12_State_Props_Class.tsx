import React from "react";
import { View,Text, TextInput, Button } from "react-native";
import Student from "./12_Student";

interface AppState{
    name:string,
    age:number
}

class App extends React.Component<any,AppState>{
    constructor(props:any){
        super(props);
        this.state={
            name:'John',
            age:20
        }
    }

    updateState=(val:any)=>{
        this.setState({name:val})
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
                <TextInput placeholder="Enter your name" onChangeText={(text)=>this.updateState(text)}/>
                <Button title="Press Me"/>
                <Student name={this.state.name}/>
            </View>
        )
    }
}

export default App;