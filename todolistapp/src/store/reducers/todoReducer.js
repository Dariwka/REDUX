export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

const DEFAULT_STATE = [
  {
    note: "first important note",
    id: Date.now() + 1,
    completed: false,
  },
  {
    note: "second important note",
    id: Date.now() + 2,
    completed: false,
  },
  {
    note: "third important note",
    id: Date.now() + 3,
    completed: true,
  },
];
export const todoReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...todo, ...action.todo };
        } else {
          return todo;
        }
      });
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
