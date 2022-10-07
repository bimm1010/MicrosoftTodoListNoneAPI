import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { getInput, getIndex } from "../../../reducer/reducer/actions";

const ListItem = ({ item, index, navigation, state, func }) => {    

    const handleUpdate = () => {
        func(getInput(state[index]))
        func(getIndex(index))
        navigation.navigate("Update")
    }
    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={handleUpdate}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 35,   
        marginTop: 20
    },
})

export default ListItem;

