import * as actionTypes from "../actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state, action.data];
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeNote));
    default:
      return state;
  }
};

export default reducer;
