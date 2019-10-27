import * as Actions from "../actions";

const initialState = null;

const session = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SESSION: {
      return {
        ...action.session
      };
    }
    default: {
      return state;
    }
  }
};

export default session;
