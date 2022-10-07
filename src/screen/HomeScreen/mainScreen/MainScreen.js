import React, { useContext } from "react";
import Context from "../../../reducer/context/Context";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import ListHeaderComponent from "../listHeaderComponent/ListHeaderComponent";
import ListFooterComponent from "../listFooterComponent/ListFooterComponent";
import ListItem from "../listItemComponent/ListItem";


const MainScreen = ({ navigation }) => {
    const [state, dispatch] = useContext(Context)
    const { TextInputField, ListTodo } = state

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={ListTodo}
                renderItem={({ item, index }) => (
                    <ListItem func={dispatch} state={ListTodo} item={item} index={index} navigation={navigation}/>
                )}
                ListHeaderComponent={<ListHeaderComponent data={ListTodo} />}
            />
            <ListFooterComponent navigation={navigation} TextInputField={TextInputField} dispatch={dispatch}/>
        </SafeAreaView>
    )
}


export default MainScreen;