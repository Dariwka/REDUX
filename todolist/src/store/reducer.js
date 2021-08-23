import * as actionTypes from "../store/action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        todo_list: state.todo_list.concat({
          id: new Date(),
          text: action.data,
          completed: action.done,
        }),
      };
    case actionTypes.TOGGLE_NOTE:
      const striked = state.todo_list.map((note) => {
        return note.id === action.strikeID
          ? {
              ...note,
              complete: !note.complete,
            }
          : { ...note };
      });

      return {
        ...state,
        todo_list: striked,
      };

    case actionTypes.RESET_NOTE:
      return {
        ...state,
        note: "",
      };
    case actionTypes.REMOVE_NOTE:
      const updateArray = state.todo_list.filter(
        (note) => note.id !== action.item
      );
      return {
        ...state,
        todo_list: updateArray,
      };
    default:
      return state;
  }
};

const initialState = {
  todo_list: [],
};

export default reducer;
