import React from "react";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "../store/actions/actions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "../components/css/Main.css";

const ListTodo = ({ todos, editTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            onClick={() => editTodo({ ...todo, completed: !todo.completed })}
          >
            {todo.note}
            <button onClick={() => deleteTodo(todo.id)} type="button">
              <DeleteForeverIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}
export default connect(mapStateToProps, { editTodo, deleteTodo })(ListTodo);
