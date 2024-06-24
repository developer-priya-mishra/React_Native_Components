import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

const App=()=>{
    const [count,setCount]=useState(0);

    // Runs on every render
    useEffect(()=>{
        console.warn('Hello')
    });

    // Runs only on first render
    // useEffect(()=>{
    //     console.warn('Hii')
    // },[]);

    return(
        <View>
            <Text style={{fontSize:30}}>Life cycle with useEffect : {count}</Text>
            <Button title="Update Count" onPress={()=>setCount(count+1)}/>
        </View>
    )
}

export default App;