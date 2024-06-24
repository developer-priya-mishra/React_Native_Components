import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const App=()=>{

    return(
        <View style={styles.main}>
            <Pressable
            // onPress={()=>console.warn("Normal onPress")}
            onLongPress={()=>console.warn("Long onPress")}
            // onPressIn={()=>console.warn("PressIn onPress")}
            // onPressOut={()=>console.warn("PressOut onPress")}
            >
                <Text style={styles.pressableBtn}>Pressable Button</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center'
    },
    pressableBtn:{
        backgroundColor:'blue',
        color:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        fontSize:20,
        textAlign:'center',
        shadowColor:'#000',
        elevation:5
    }
})
export default App;