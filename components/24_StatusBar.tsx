import React, { useState } from "react";
import { Button, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

const App=()=>{
    const [hide,setHide]=useState(false);
    const [barStyle,setBarStyle]=useState<"default" | "light-content" | "dark-content">("default");

    const handleUpdateStyle = () => {
        setBarStyle(barStyle === "default" ? "dark-content" : "default");
    };

    return(
        <View style={styles.container}>
            <StatusBar 
            backgroundColor="orange"
            barStyle={barStyle}
            hidden={hide}
            />
            <View style={styles.btn}>
            <Button title="Toggle Status Bar" onPress={()=>setHide(!hide)}/>
            </View>
            <Button title="Update style" onPress={handleUpdateStyle}/>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    btn:{
        marginBottom:10
    }
    
})
export default App;