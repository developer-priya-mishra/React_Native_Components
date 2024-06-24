import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./29_Login";
import SignUp from "./29_SignUp";

const Tab=createMaterialTopTabNavigator()
const App=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="SignUp" component={SignUp}/>
                <Tab.Screen name="Other" component={SignUp}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App