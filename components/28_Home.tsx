import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Home=(props:any)=>{
    console.warn(props.route.params)
    const {name,age}=props.route.params

    return(
        <View style={styles.main}>
        <Text style={{fontSize:30}}>User Screen</Text>
        <Text style={{fontSize:30}}>Name : {name}</Text>
        <Text style={{fontSize:30}}>Age : {age}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Home