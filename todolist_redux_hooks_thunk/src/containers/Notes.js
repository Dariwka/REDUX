import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteOneNote } from "../store/actions";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (event, id) => {
    event.stopPropagation();
    dispatch(deleteOneNote(id));
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
            <button onClick={(event) => handleDelete(event, note.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
