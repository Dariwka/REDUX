import React, { useState } from "react";
import { connect } from "react-redux";

const Notes = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //console.log("todo text", todo);
  return (
    <div className="addNotes">
      <input
        type="text"
        onChange={() => handleChange(e)}
        className="todo-input"
      />

      <button className="add-btn">Add</button>
    </div>
  );
};

export default connect(null, null)(Notes);
