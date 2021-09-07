import { getAll, createNew, removeNote } from "../services/notes";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const INIT_NOTES = "INIT_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";

export const deleteOneNote = (id) => {
  return async (dispatch) => {
    await removeNote(id);
    const notes = await getAll();
    dispatch({
      type: DELETE_NOTE,
      data: notes,
    });
  };
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({
      type: INIT_NOTES,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await createNew(text);
    dispatch({
      type: ADD_TODO,
      data: newNote,
    });
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id,
});
