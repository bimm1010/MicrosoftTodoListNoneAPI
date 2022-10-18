import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const FooterNoteScreen = () => {
    return(
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.Text}>+ Thêm Tác Vụ</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    Button: {
        width: "100%",
        height: "100%",
    },
    Container:{
        borderRadius: 10,
        backgroundColor: "gray",
        marginHorizontal: "3%",
        marginBottom: "5%",
        height: 45,
    }, 
    Text: {
        paddingTop: 15,
        paddingLeft: 10,
        fontSize: 15
    }
})

export default FooterNoteScreen