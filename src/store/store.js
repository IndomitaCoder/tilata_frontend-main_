import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import accountReducer from "./accountReducer";

const appReducer = combineReducers({
  account:
    accountReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === 'account/clearResults') {
  //   storage.removeItem('persist:root')
  //   state = {}
  // }
  return appReducer(state, action)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
