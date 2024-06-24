import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

const App=()=>{
   const [show,setShow]=useState(true);

    return(
        <View>
            <Text style={{fontSize:25}}>useEffect for Unmount Component</Text>
            <Button title="Toggle Component" onPress={()=>setShow(!show)}/>
            {
                show ?
                <Student/>
                :null
            }
        </View>
    )
}

const Student=()=>{

    let timer=setInterval(()=>{
        console.warn("Timer called");
    },2000)

    useEffect(()=>{
        return ()=>clearInterval(timer)
    })

     return(
         <View>
             <Text style={{fontSize:30,color:'green'}}>Student Component</Text>
         </View>
     )
}

export default App;