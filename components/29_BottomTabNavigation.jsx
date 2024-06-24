import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./29_Login";
import SignUp from "./29_SignUp";

const Tab=createBottomTabNavigator()
const App=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="SignUp" component={SignUp}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App