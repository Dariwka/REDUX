import React from "react";
import { connect } from "react-redux";
import "../components/css/Header.css";

const Header = ({ todos }) => {
  return (
    <header>
      <h1>My to do list</h1>
      <p>
        I have currently <span>{todos.length}</span> notes
      </p>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(Header);
