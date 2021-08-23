import React, { Component } from "react";
import { connect } from "react-redux";
import "../container/css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>My to do list</h1>
        <p>
          I have currently{" "}
          <span className="spannotes">{this.props.todo.length}</span> notes
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo_list,
  };
}

export default connect(mapStateToProps)(Header);
