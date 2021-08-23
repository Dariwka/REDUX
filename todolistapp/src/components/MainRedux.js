import React from "react";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import { connect } from "react-redux";

const MainRedux = ({ todos }) => {
  return (
    <main>
      <InputTodo />
      <ListTodo todos={todos} />
    </main>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}
export default connect(mapStateToProps)(MainRedux);
