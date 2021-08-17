import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
  }

  return state;
};

const initialState = {
  counter: 0,
};

export default reducer;
