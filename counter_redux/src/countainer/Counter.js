import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions"

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onDecCounter}>Remote one</button>
          <button onClick={this.props.resetCounter}>Resete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    resetCounter: () => dispatch({ type: actionTypes.RESET}),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
