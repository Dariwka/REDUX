import { createSlice } from "@reduxjs/toolkit";

const InitialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.playoad);
      return state;
    },
  },
});

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
