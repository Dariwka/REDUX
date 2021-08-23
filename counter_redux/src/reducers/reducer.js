import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.INCREMENTFIVE:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.DECREMENTFIVE:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

const initialState = {
  counter: 0,
  results: [
    { id: 1, value: 10 },
    { id: 2, value: 100 },
    { id: 3, value: 1000 },
  ],
};

export default reducer;
