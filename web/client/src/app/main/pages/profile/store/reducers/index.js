import contacts from "./contacts.reducer";
import session from "./sessions.reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  contacts,
  session
});

export default reducer;
