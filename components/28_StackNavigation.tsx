import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./28_Header";
import Home from "./28_Home";
import Login from "./28_Login";

const Stack=createNativeStackNavigator();

const App=()=>{

    const btnAction=()=>{
        console.warn("Button pressed")
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerStyle:{
                        backgroundColor:'blue',
                    },
                    headerTintColor:'pink',
                    headerTitleStyle:{
                        fontSize:25
                    }
                }}>
                <Stack.Screen name="Login" component={Login}
                options={{
                    headerTitle:()=><Button title="Left" onPress={btnAction}/>,
                    headerRight:()=><Header/>,
                    title:"User Login",
                    headerStyle:{
                        backgroundColor:'orange',
                    },
                    headerTintColor:'red',
                    headerTitleStyle:{
                        fontSize:25
                    }
                }}
                />
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}








export default App;