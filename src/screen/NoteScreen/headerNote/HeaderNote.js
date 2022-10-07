import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { getInput } from "../../../reducer/reducer/actions";

const HeaderNote = ({ func ,data }) => {
    
    return(
        <View style={styles.Container}>
            <TextInput 
                value={data}
                style={styles.styleInput}
                placeholder="Enter TO DO"
                autoFocus={true}
                onChangeText={text => func(getInput(text))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 10,
        marginHorizontal: 10
    },
    styleInput: {
        fontSize: 35,
    }
})

export default HeaderNote