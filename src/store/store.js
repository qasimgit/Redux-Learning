import { createStore } from "redux";

// we can not import more than one reducers in create store as it accepts only one parameter so we have a index file in reducers and import all reducers there in a allreducers compoenent then call it here

// const store = createStore(counterReducer  , loggedReducer);

import { allReducers } from "../reducers";

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
