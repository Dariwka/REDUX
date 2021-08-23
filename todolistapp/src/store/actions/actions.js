import {
  SET_TODOS,
  EDIT_TODO,
  ADD_TODO,
  DELETE_TODO,
} from "../reducers/todoReducer";

export function setTodos(todos) {
  return (dispatch) => {
    dispatch({
      type: SET_TODOS,
      todos,
    });
  };
}

export function editTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: EDIT_TODO,
      todo,
    });
  };
}

export function addTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      todo,
    });
  };
}

export function deleteTodo(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      id,
    });
  };
}
