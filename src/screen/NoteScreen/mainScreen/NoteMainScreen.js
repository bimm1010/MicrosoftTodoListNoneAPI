import React, { useContext, useEffect } from "react";
import Context from "../../../reducer/context/Context";
import { View, FlatList, Keyboard } from "react-native";
import HeaderNote from "../headerNote/HeaderNote";
import FooterNoteScreen from "../footerNote/FooterNoteScreen";
import { addInput } from "../../../reducer/reducer/actions";
import { getInput } from "../../../reducer/reducer/actions";

const NoteMainScreen = () => {
    const [state, dispatch] = useContext(Context)
    const { TextInputField, ListTodo } = state
    console.log(ListTodo)

    useEffect(() => {
        const addToList = Keyboard.addListener("keyboardDidHide", () => {
            if (TextInputField) {
                dispatch(addInput(TextInputField))
                dispatch(getInput(''))
            }
        })
        return () => {
            addToList.remove(); 
        }
    }, [TextInputField])


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={""}
                renderItem={""} //render líst trong phần node 
                ListHeaderComponent={<HeaderNote func={dispatch} data={TextInputField} />}
            />
            <FooterNoteScreen />
        </View>
    )
}


export default NoteMainScreen;