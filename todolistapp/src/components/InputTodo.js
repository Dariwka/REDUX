import React, { useState } from "react";
import { addTodo } from "../store/actions/actions";
import { connect } from "react-redux";

const InputTodo = ({ addTodo }) => {
  const [todoForm, setTodoForm] = useState({
    note: "",
    id: Date.now(),
    completed: false,
  });

  const inputValueHandler = (event) => {
    setTodoForm({
      ...todoForm,
      [event.target.name]: event.target.value,
      id: Date.now(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoForm);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="note"
          name="note"
          required
          minLength={4}
          maxLength={500}
          size={20}
          onChange={inputValueHandler}
        />
        <button type="submit">Add note</button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { addTodo })(InputTodo);
