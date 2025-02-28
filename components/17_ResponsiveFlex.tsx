import React, { useState } from "react";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App=()=>{

    return(
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox2}></View>
                <View style={styles.innerBox3}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1
    },
    box1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'red'
    },
    innerBox1:{
        flex:1,
        backgroundColor:'skyblue',
        margin:10
    },
    innerBox2:{
        flex:1,
        backgroundColor:'yellow',
        margin:10
    },
    innerBox3:{
        flex:1,
        backgroundColor:'pink',
        margin:10
    },
    box2:{
        flex:1,
        backgroundColor:'green'
    },
    box3:{
        flex:1,
        backgroundColor:'blue'
    },
})

export default App;