import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

class AddTodo extends Component {
  addHandler = (e) => {
    e.preventDefault();
    this.props.addNote(e.target.note.value);
    e.target.note.value = "";
  };

  render() {
    return (
      <form onSubmit={this.addHandler}>
        <input
          type="text"
          name="note"
          required
          minLength={4}
          maxLength={500}
          size={20}
        />
        <input className="addButton" type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) =>
      dispatch({ type: actionTypes.ADD_NOTE, data: text, done: false }),
    resetNote: () => dispatch({ type: actionTypes.RESET_NOTE }),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
