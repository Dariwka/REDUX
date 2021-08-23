import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

class TodoList extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.todo.map((item) => (
            <li
              key={item.id}
              onClick={() => this.props.strikeNote(item.id)}
              className={item.complete ? "todo strike" : "todo"}
            >
              {item.text}
              <span
                className="material-icons"
                onClick={() => this.props.removeNote(item.id)}
              >
                delete_forever
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    strikeNote: (id) =>
      dispatch({ type: actionTypes.TOGGLE_NOTE, strikeID: id }),
    removeNote: (id) => dispatch({ type: actionTypes.REMOVE_NOTE, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
