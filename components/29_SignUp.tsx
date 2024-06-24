import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignUp=()=>{
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Sign Up</Text>
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
        fontSize:40
    }
})

export default SignUp