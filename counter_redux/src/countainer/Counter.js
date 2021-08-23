import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onIncFiveCounter}>Add 5</button>
          <button onClick={this.props.onDecCounter}>Remote one</button>
          <button onClick={this.props.onDecFiveCounter}>Remote 5</button>
          <button onClick={this.props.resetCounter}>Resete</button>
        </div>
        <button onClick={this.props.storeCounter}>Store the results</button>

        <div>
          <ul>
            {this.props.storedResults.map((item) => (
              <li
                key={item.id}
                onClick={() => this.props.onDeleteResult(item.id)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onIncFiveCounter: () =>
      dispatch({ type: actionTypes.INCREMENTFIVE, value: 5 }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onDecFiveCounter: () =>
      dispatch({ type: actionTypes.DECREMENTFIVE, value: 5 }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
    storeCounter: () => dispatch({ type: actionTypes.STORE }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
