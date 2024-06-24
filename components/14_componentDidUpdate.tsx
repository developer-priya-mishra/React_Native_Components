import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

const App=()=>{
    const [count,setCount]=useState(0);
    const [data,setData]=useState(100);


    // useEffect(()=>{
    //     console.warn(count);
    // },[count,data]);

    // useEffect(()=>{
    //     console.warn("run this code when data is updated");
    // },[data]);

    // useEffect(()=>{
    //     console.warn("run this code when count is updated");
    // },[count]);

    return(
        <View>
            <Text style={{fontSize:30,marginBottom:10}}>{data} : useEffect as component : {count}</Text>
            <View style={{marginBottom:10}}>
            <Button title="Update Counter" onPress={()=>setCount(count+1)} />
            </View>
            <Button title="Update Data" onPress={()=>setData(data+1)}/>
            <User item={{data,count}}/>
        </View>
    )
}


const User=(props:any)=>{

    useEffect(()=>{
        console.warn("run this code when data prop is updated");
    },[props.item.data]);

    useEffect(()=>{
        console.warn("run this code when count prop is updated");
    },[props.item.count]);

    return(
        <View>
            <Text style={{color:'red'}}>data : {props.item.data}</Text>
            <Text style={{color:'red'}}>count :  {props.item.count}</Text>
        </View>
    )
}

export default App;