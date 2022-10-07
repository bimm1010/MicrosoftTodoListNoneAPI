import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";


const ListHeaderComponent = ({ data }) => {
    
    const LineDraw = () => {
        return(
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.item}>
                <Text>Ngày của tôi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Text>Quan trọng</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Text>Đã Lập kế hoạch</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Text>Đã Giao cho tôi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Text>Tác vụ</Text>
            </TouchableOpacity>

            {data.length > 0 ? <LineDraw /> : ""}
        </View>
    );
}   

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 35,
        marginTop: 20
    },
    item: {
        marginBottom: 20
    }
})

export default ListHeaderComponent