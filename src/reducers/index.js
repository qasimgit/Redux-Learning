import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { loggedReducer } from "./isLoggedIn";

export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});
