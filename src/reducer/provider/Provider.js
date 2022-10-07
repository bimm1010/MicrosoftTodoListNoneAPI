import React, {useReducer}from "react";
import Context from "../context/Context";
import reducer, {initialState} from "../reducer/reducer";
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;