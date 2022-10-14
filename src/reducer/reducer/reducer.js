import {
  ADD_TEXT_INPUT,
  GET_TEXT_INPUT,
  DEL_TEXT_INPUT,
  UPDATE_TEXT_INPUT,
  GET_INDEX,
} from './constants';

const initialState = {
  TextInputField: '',
  ListTodo: [],
  indexItem: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_TEXT_INPUT:
      return {
        ...state,
        TextInputField: action.payload,
      };
    case ADD_TEXT_INPUT:
      return {
        ...state,
        ListTodo: [...state.ListTodo, action.payload],
      };
    case UPDATE_TEXT_INPUT:
      const newListTodo = [...state.ListTodo];
      newListTodo[action.index] = action.payload;
      return {
        ...state,
        ListTodo: newListTodo,
      };
    case GET_INDEX:
      return {
        ...state,
        indexItem: action.payload,
      };
    case DEL_TEXT_INPUT:
      const newList = [...state.ListTodo];
      newList.splice(action.payload, 1);
      return {
        ...state,
        ListTodo: newList,
      };
  }
};

export {initialState};
export default reducer;
