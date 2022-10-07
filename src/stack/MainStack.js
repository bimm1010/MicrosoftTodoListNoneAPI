import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screen/HomeScreen/mainScreen/MainScreen";
import NoteMainScreen from "../screen/NoteScreen/mainScreen/NoteMainScreen";
import UpdateScreen from "../screen/updateScreen/UpdateScreen";
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={MainScreen}/>
            <Stack.Screen name="Note" component={NoteMainScreen}/>
            <Stack.Screen name="Update" component={UpdateScreen}/>
        </Stack.Navigator>
    )
}

export default MainStack;