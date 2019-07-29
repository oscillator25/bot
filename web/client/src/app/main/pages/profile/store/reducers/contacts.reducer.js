import * as Actions from "../actions";

const initialState = {
  entities: [],
  selectedContactId: null
};

const contactsReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_SELECTED_CONTACT_ID: {
      return {
        ...state,
        selectedContactId: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default contactsReducer;
