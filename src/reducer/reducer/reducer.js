import { ADD_TEXT_INPUT, GET_TEXT_INPUT, DEL_TEXT_INPUT, UPDATE_TEXT_INPUT, GET_INDEX } from "./constants";

const initialState = {
    TextInputField: "",
    ListTodo: [],
    indexItem: 0
}


const reducer = (state, action) => {
    switch (action.type) {
        case GET_TEXT_INPUT:
            return {
                ...state,
                TextInputField: action.payload
            }
        case ADD_TEXT_INPUT:
            return {
                ...state,
                ListTodo: [...state.ListTodo, action.payload]
            }
        case UPDATE_TEXT_INPUT:
            const newListTodo = [...state.ListTodo]
            newListTodo[action.index] = action.payload
            return {
                ...state,
                ListTodo: newListTodo
            }
        case GET_INDEX:
            return {
                ...state,
                indexItem: action.payload
            }
    }
}


export { initialState }
export default reducer