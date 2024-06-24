import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TextInput } from "react-native"



const Login=(props:any)=>{

    const [name,setName]=useState("")
    const [age,setAge]=useState(0)

    return(
        <View style={styles.main}>
            <Text style={styles.text}>Login Screen</Text>
            <TextInput style={styles.textInput} placeholder="Enter your name" onChangeText={(text)=>setName(text)}/>
            <TextInput style={styles.textInput} placeholder="Enter your age" onChangeText={(text)=>setAge(parseInt(text))}/>
            <Button title="Go to Home Page" onPress={()=>props.navigation.navigate("Home",{name,age})}/>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        marginBottom:10
    },
    textInput:{
        fontSize:20,
        borderColor:'#000',
        borderWidth:2,
        marginBottom:10
    }
})

export default Login