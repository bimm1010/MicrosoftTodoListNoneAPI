import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { getInput } from "../../../reducer/reducer/actions";


const ListFooterComponent = ({ navigation, TextInputField, dispatch }) => {
    
    const handleCreateNew = () => {
        dispatch(getInput(''))
        navigation.navigate("Note", {title: "Note"})
    }


    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={handleCreateNew}
            >
                <Text>+ Danh sách mới</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "8%",
        marginVertical: "5%"
    }
})


export default ListFooterComponent;