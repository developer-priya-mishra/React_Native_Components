import React ,{useState} from "react";
import { Button, Text, View } from "react-native";

const App=()=>{
    const [name,setName]=useState("John");

    return(
        <View>
            <Text style={{fontSize:30}}>Props in Reactjs</Text>
            <Button title="Update Name" onPress={()=>setName("Peter")}/>
            <User name={name} age={29}/>
        </View>
    )
}

const User=(props:any)=>{

    return(
        <View>
            <Text style={{fontSize:30}}>{props.name}</Text>
            <Text style={{fontSize:30}}>{props.age}</Text>
        </View>
    )
}

export default App;